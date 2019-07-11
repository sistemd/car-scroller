'use strict';

import {carParts, carWidth, carHeight} from './carParts';
import {randomRange, randomElement, rectanglesOverlap, runEveryCalculated, runInBackground} from './utils';
import {Cookie} from './cookie';
import {RoadDrawing} from './decorations';
import {Canvas, drawCar, drawCars, drawDecorations} from './graphics';

const laneCount = 6;
const mapWidth = laneCount*carWidth;
const mapHeight = carHeight*6;
const backgroundColor = '#E6E6F5';

export class Game {
    constructor(document) {
        this.canvas = new Canvas(document);
        this.canvas.width = mapWidth;
        this.canvas.height = mapHeight;

        this.playerCar = PlayerCar.atDefaultPosition();
        this.enemyCars = [];
        this.decorations = [];
        this.distanceTraveled = 0;
        this.cookie = new Cookie(document);
        this.keyHandler = new KeyHandler(document);

        this.runEveryCalculated(
            () => this.enemyCars.push(EnemyCar.atRandomPosition()), 
            () => 2800/this.playerCar.verticalSpeed);
        
        this.runEveryCalculated(
            () => this.decorations.push(RoadDrawing.atDefaultPosition(mapWidth)),
            () => 2000/this.playerCar.verticalSpeed);
    }

    run() {
        runInBackground(() => {
            if (!this.gameOver) {
                this.clearCanvas();
                this.moveAllObjects();
                this.destroyOffscreenObjects();
                this.drawEverything();
                this.checkGameOver();
            }
        });
    }

    checkGameOver() {
        if (this.playerCarCrashed()) {
            this.gameOver = true;
            this.showScore();
        }
    }

    playerCarCrashed() {
        return this.enemyCars.some(enemyCar => carsCrashed(enemyCar, this.playerCar));
    }

    showScore() {
        const score = this.calculateScore();
        const highScore = readHighScore(this.cookie);
        let outputText = `Final score: ${score}.`;
        if (!highScore || score > highScore) {
            writeHighScore(this.cookie, score);
            outputText = 'New high score!\n'+outputText;
        }
        alert(outputText);
    }

    calculateScore() {
        return Math.floor(this.distanceTraveled/1e3);
    }

    moveAllObjects() {
        this.playerCar.updateSpeed(this.distanceTraveled);

        const relativitySystem = VerticalRelativitySystem.relativeTo(this.playerCar);
        relativitySystem.addElements(this.enemyCars);
        relativitySystem.addElements(this.decorations);
        
        if (this.keyHandler.keyIsDown('ArrowLeft'))
            this.playerCar.moveLeft(0);
        if (this.keyHandler.keyIsDown('ArrowRight'))
            this.playerCar.moveRight(mapWidth-carWidth);

        relativitySystem.moveElements();

        this.distanceTraveled += this.playerCar.verticalSpeed;
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
    }

    runEveryCalculated(task, milliseconds) {
        runEveryCalculated(() => {
            if (!this.gameOver)
                task();
        }, milliseconds)
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
        return 5;
    }

    static maxSpeed() {
        return 7;
    }

    constructor(position) {
        super(position);
        this.horizontalSpeed = this.verticalSpeed = 0;
        this.updateSpeed(0);
    }

    updateSpeed(distanceTraveled) {
        const newVerticalSpeed = Math.abs(distanceTraveled/5000)+PlayerCar.baseSpeed();
        this.horizontalSpeed = this.verticalSpeed = 
            (newVerticalSpeed > PlayerCar.maxSpeed()) ? PlayerCar.maxSpeed() : newVerticalSpeed;
    }

    moveLeft(leftBoundary) {
        const newX = this.position.x-this.horizontalSpeed;
        this.position.x = (newX < leftBoundary) ? leftBoundary : newX;
    }

    moveRight(rightBoundary) {
        const newX = this.position.x+this.horizontalSpeed;
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
        this.verticalSpeed = 2;            
    }

    physicalParts() {
        return carParts(this.position, this.color);
    }
}

function onScreenCars(cars) {
    const carIsOnScreen = (car) => car.position.y < -mapHeight;
    return cars.filter(carIsOnScreen);
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

    moveElements() {
        for (const element of this.elements)
            element.position.y += this.centerObject.verticalSpeed-element.verticalSpeed;
    }
}

const cookieHighScoreKey = 'highscore';

function readHighScore(cookie) {
    return cookie.read(cookieHighScoreKey);
}

function writeHighScore(cookie, highScore) {
    cookie.write(cookieHighScoreKey, highScore);
}
