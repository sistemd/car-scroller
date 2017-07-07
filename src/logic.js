'use strict';

define(['src/utils'], (utils) => {
    const logic = {
        constants: {},
        internal: {}
    };
    
    logic.pointsAdded = (p1, p2) => {
        return {
            x: p1.x+p2.x,
            y: p1.y+p2.y
        };
    };

    logic.pointsSubtracted = (p1, p2) => {
        return {
            x: p1.x-p2.x,
            y: p1.y-p2.y
        };
    };

    logic.pointsAreEqual = (p1, p2) => p1.x === p2.x && p1.y === p2.y;
    
    logic.internal.KeyTracker = class {
        constructor() {
            this.isDownMap = new Map();
        }
        
        setKeyDown(key) {
            this.isDownMap.set(key, true);
        }
        
        setKeyUp(key) {
            this.isDownMap.set(key, false);
        }
        
        keyIsDown(key) {
            return this.isDownMap.has(key) ? this.isDownMap.get(key) : false;
        }
    };

    logic.KeyHandler = class {
        constructor(keysArray, document) {
            this.keyTracker = new logic.internal.KeyTracker();
            
            document.addEventListener('keydown', logic.KeyHandler.eventCallbackForKeyInKeys(keysArray, (key) => {
                this.keyTracker.setKeyDown(key);
            }));

            document.addEventListener('keyup', logic.KeyHandler.eventCallbackForKeyInKeys(keysArray, (key) => {
                this.keyTracker.setKeyUp(key);
            }));
        }
        
        static eventCallbackForKeyInKeys(keysArray, callback) {
            return (event) => {
                if (utils.contains(keysArray, event.key))
                    callback(event.key);
            };
        }

        keyIsDown(key) {
            return this.keyTracker.keyIsDown(key);
        }
    };

    logic.carParts = {
        constants: {}
    };

    logic.carParts.facingUp = (position, color) => {
        const tire = ({x, y}) => {
            return {
                rect: {
                    x, y, 
                    width: logic.carParts.constants.tireWidth,
                    height: logic.carParts.constants.tireHeight
                },
                color: 'black'
            };
        };

        const result = {};

        result.bonnet = {
            rect: {
                x: position.x+logic.carParts.constants.tireWidth*2, 
                y: position.y, 
                width: logic.carParts.constants.bonnetWidth, 
                height: logic.carParts.constants.bonnetHeight,
            },
            color
        };
        result.roof = {
            rect: {
                x: position.x+logic.carParts.constants.tireWidth, 
                y: result.bonnet.rect.y+logic.carParts.constants.bonnetHeight, 
                width: logic.carParts.constants.roofWidth,
                height: logic.carParts.constants.roofHeight
            },
            color
        };
        result.frontLeftTire = tire({
            x: position.x, // TODO Remove these constants baked in here
            y: result.roof.rect.y+5
        });
        result.bottomLeftTire = tire({
            x: position.x, 
            y: result.roof.rect.y+logic.carParts.constants.roofHeight-20
        });
        result.frontRightTire = tire({
            x: result.roof.rect.x+logic.carParts.constants.roofWidth, 
            y: result.roof.rect.y+5
        });
        result.bottomRightTire = tire({
            x: result.roof.rect.x+logic.carParts.constants.roofWidth, 
            y: result.roof.rect.y+logic.carParts.constants.roofHeight-20
        });

        return result;
    };

    logic.carParts.facingDown = (position) => {
        return logic.carParts.facingUp(position);
    };

    logic.carParts.constants.tireWidth = 7;
    logic.carParts.constants.tireHeight = 15;
    logic.carParts.constants.bonnetWidth = 30;    
    logic.carParts.constants.bonnetHeight = 20;    
    logic.carParts.constants.roofWidth = logic.carParts.constants.bonnetWidth+logic.carParts.constants.tireWidth*2;
    logic.carParts.constants.roofHeight = logic.carParts.constants.bonnetHeight+50;
    logic.carParts.constants.carWidth = logic.carParts.constants.roofWidth+logic.carParts.constants.tireWidth*2
    logic.carParts.constants.carHeight = logic.carParts.constants.roofHeight+logic.carParts.constants.bonnetHeight;

    logic.constants.laneCount = 6;
    logic.constants.mapWidth = logic.constants.laneCount*logic.carParts.constants.carWidth;
    logic.constants.mapHeight = logic.carParts.constants.carHeight*6;

    logic.RandomlyColored = class {
        constructor() {
            const randomColor = () => utils.randomElement(
                ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'magenta', 'aqua', 'maroon']);

            this.color = randomColor();
        }
    };

    logic.PlayerCar = class extends logic.RandomlyColored {
        constructor() {
            super();
            this.position = {
                x: 0,
                y: logic.constants.mapHeight-logic.carParts.constants.carHeight
            };
            this.baseSpeed = 3;
            this.maxSpeed = 7;
        }

        get distanceTraveled() {
            return this.position.y;
        }

        get speed() {
            const speed = Math.floor(Math.abs(this.distanceTraveled/5000))+this.baseSpeed;
            return (speed > this.maxSpeed) ? this.maxSpeed : speed;
        }

        physicalParts() {
            return logic.carParts.facingUp(this.position, this.color);
        }

        setXIfAllowed(newX) {
            if (newX >= 0 && newX <= logic.constants.mapWidth-logic.carParts.constants.carWidth)
                this.position.x = newX;
        }

        moveLeft() {
            this.setXIfAllowed(this.position.x-this.speed);
        }

        moveRight() {
            this.setXIfAllowed(this.position.x+this.speed);
        }

        moveUp() {
            this.position.y -= this.speed;
        }
    };

    logic.EnemyCar = class extends logic.RandomlyColored {
        constructor(y) {
            super();
            this.position = {
                x: canvas.width/logic.constants.laneCount*utils.randomRange(0, logic.constants.laneCount), 
                y
            };
        }

        physicalParts() {
            return logic.carParts.facingDown(this.position, this.color);
        }
    };
    
    return logic;
});