'use strict';

import {carParts, carWidth, carHeight} from './carParts';
import {randomRange, randomElement, rectanglesOverlap, repeatTask} from './utils';
import {Cookie} from './cookie';
import {RoadDrawing} from './decorations';
import {Canvas, drawCar, drawCars, drawDecorations, ScoreDisplay} from './graphics';

const laneCount = 6;
const mapWidth = laneCount*carWidth;
const mapHeight = carHeight*6;
const backgroundColor = '#E6E6F5';

export class Game {
    constructor(document) {
        this.canvas = new Canvas();
        this.canvas.width = mapWidth;
        this.canvas.height = mapHeight;
        this.scoreDisplay = document.getElementById('score');
        this.restartButton = document.getElementById('restart');
        
        this.restartButton.onclick = () => {
            this.restart();
            this.restartButton.hidden = true;
        };

        this.playerCar = PlayerCar.atDefaultPosition();
        this.enemyCars = [];
        this.decorations = [];
        this.distanceTraveled = 0;
        this.gameOver = false;
        this.cookie = new Cookie(document);
        this.keyHandler = new KeyHandler(document);

        this.repeatTaskWhileRunning({
            task: () => this.enemyCars.push(EnemyCar.atRandomPosition()), 
            milliseconds: () => 1000/this.playerCar.verticalSpeed
        });

        this.repeatTaskWhileRunning({
            task: () => this.decorations.push(RoadDrawing.atDefaultPosition(mapWidth)),
            milliseconds: () => 350/this.playerCar.verticalSpeed
        });
    }

    restart() {
        this.canvas.clear();
        this.playerCar = PlayerCar.atDefaultPosition();
        this.enemyCars = [];
        this.decorations = [];
        this.distanceTraveled = 0;
        this.gameOver = false;
    }

    run() {
        repeatTask({
            task: timeDelta => {
                if (!this.gameOver) {
                    this.clearCanvas();
                    this.moveAllObjects(timeDelta);
                    this.destroyOffscreenObjects();
                    this.drawEverything();
                    this.checkGameOver();
                }
            }
        });
    }

    checkGameOver() {
        if (this.playerCarCrashed()) {
            this.gameOver = true;
            this.showScore();
            this.restartButton.hidden = false;
        }
    }

    playerCarCrashed() {
        return this.enemyCars.some(enemyCar => carsCrashed(enemyCar, this.playerCar));
    }

    showScore() {
        const score = this.calculateScore();
        const highScore = readHighScore(this.cookie);
        let outputText = `Final score: ${score}`;
        if (!highScore || score > highScore) {
            writeHighScore(this.cookie, score);
            outputText = `New high score!${outputText}`;
        }
        this.scoreDisplay.innerHTML = outputText;
    }

    calculateScore() {
        return Math.floor(this.distanceTraveled/1e3);
    }

    moveAllObjects(timeDelta) {
        this.playerCar.updateSpeed(this.distanceTraveled);

        const relativitySystem = VerticalRelativitySystem.relativeTo(this.playerCar);
        relativitySystem.addElements(this.enemyCars);
        relativitySystem.addElements(this.decorations);
        
        if (this.keyHandler.keyIsDown('ArrowLeft'))
            this.playerCar.moveLeft(0, timeDelta);
        if (this.keyHandler.keyIsDown('ArrowRight'))
            this.playerCar.moveRight(mapWidth-carWidth, timeDelta);

        relativitySystem.moveElements(timeDelta);

        this.distanceTraveled += this.playerCar.verticalSpeed * timeDelta;
    }

    destroyOffscreenObjects() {
        this.enemyCars = activeObjects(this.enemyCars);
        this.decorations = activeObjects(this.decorations);
    }

    clearCanvas() {
        this.canvas.clear(backgroundColor);
    }

    drawEverything() {
        drawDecorations(this.canvas, this.decorations);
        drawCar(this.canvas, this.playerCar);
        drawCars(this.canvas, this.enemyCars);
        this.scoreDisplay.innerHTML = this.calculateScore();
    }

    repeatTaskWhileRunning({task, milliseconds}) {
        repeatTask({
            task: () => {
                if (!this.gameOver)
                    task();
            },
            milliseconds
        });
    }
}

class KeyHandler {
    constructor(document) {
        this.keyDownMap = new Map();
        document.addEventListener('keydown', ({key}) => this.keyDownMap.set(key, true));
        document.addEventListener('keyup', ({key}) => this.keyDownMap.set(key, false));
    }
    
    keyIsDown(key) {
        return this.keyDownMap.get(key);
    }
}

function randomColor() {
    return randomElement(['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'magenta', 'aqua', 'maroon']);
}

class Car {
    constructor(position) {
        this.color = randomColor();
        this.position = position;
    }

    physicalParts() {
        return carParts(this.position, this.color);
    }
}

class PlayerCar extends Car {
    static atDefaultPosition(){
        return new PlayerCar({
            x: mapWidth/2-carWidth/2,
            y: mapHeight-carHeight-5
        });
    }

    static baseSpeed() {
        return 0.8;
    }

    static maxSpeed() {
        return 2;
    }

    constructor(position) {
        super(position);
        this.horizontalSpeed = this.verticalSpeed = 0;
        this.updateSpeed(0);
    }

    updateSpeed(distanceTraveled) {
        const newSpeed = Math.abs(distanceTraveled/50000)+PlayerCar.baseSpeed();
        this.horizontalSpeed = this.verticalSpeed = 
            (newSpeed > PlayerCar.maxSpeed()) ? PlayerCar.maxSpeed() : newSpeed;
    }

    moveLeft(leftBoundary, timeDelta) {
        const newX = this.position.x-this.horizontalSpeed * timeDelta;
        this.position.x = (newX < leftBoundary) ? leftBoundary : newX;
    }

    moveRight(rightBoundary, timeDelta) {
        const newX = this.position.x+this.horizontalSpeed * timeDelta;
        this.position.x = (newX > rightBoundary) ? rightBoundary : newX;
    }
}

class EnemyCar extends Car {
    static atRandomPosition() {
        return new EnemyCar({
            x: canvas.width/laneCount*randomRange(0, laneCount), 
            y: -carHeight
        });
    }

    constructor(position) {
        super(position);
        this.verticalSpeed = 0.45;
    }

    physicalParts() {
        return carParts(this.position, this.color);
    }
}

function carsCrashed(c1, c2) {
    for (const part1 of c1.physicalParts())
        for (const part2 of c2.physicalParts())
            if (rectanglesOverlap(part1.rect, part2.rect))
                return true;
    return false;
}

function activeObjects(objects) {
    const isActive = (object) => object.position.y < mapHeight;
    return objects.filter(isActive);
}

class VerticalRelativitySystem {
    static relativeTo({object, verticalSpeed}) {
        return new VerticalRelativitySystem({object, verticalSpeed});
    }

    constructor(centerObject) {
        this.centerObject = centerObject;
        this.elements = [];
    }

    addElements(elementArray) {
        this.elements.push(...elementArray);
    }

    moveElements(timeDelta) {
        for (const element of this.elements)
            element.position.y += (this.centerObject.verticalSpeed-element.verticalSpeed) * timeDelta;
    }
}

const cookieHighScoreKey = 'highscore';

function readHighScore(cookie) {
    return cookie.read(cookieHighScoreKey);
}

function writeHighScore(cookie, highScore) {
    cookie.write(cookieHighScoreKey, highScore);
}
