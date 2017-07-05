'use strict';

require(['src/gameEngine/graphics', 'src/gameEngine/mechanics', 'src/utils'], 
        (graphics, mechanics, utils) => {

    const game = {};

    game.startTrackingUserInput = (playerCar) => {
        const keyHandler = new mechanics.KeyHandler(['ArrowLeft', 'ArrowRight'], document);
        utils.runInBackground(() => {
            if (keyHandler.keyIsDown('ArrowLeft'))
                playerCar.moveLeft();
            if (keyHandler.keyIsDown('ArrowRight'))
                playerCar.moveRight();
        });
    }

    game.EnemyCar = class {
        constructor(x) {
            this._x = x;
            this._y = 0;
        }

        updatePosition(speed) {
            this._y += speed;
        }

        get x() {
            return this._x;
        }

        get y() {
            return this._y;
        }
    };

    game.EnemyCars = class {
        constructor() {
            this.cars = [];
        }


    };

    game.randomColor = () => {

    };

    game.main = () => {
        const canvas = new graphics.Canvas(document);

        const playerCar = {
            position: {
                _x: 0,
                _y: 100,
                
                get x() {
                    return this._x;
                },

                set x(value) {
                    if (value >= 0 && value <= canvas.width - 10)
                        this._x = value;
                },

                get y() {
                    return this._y;
                }
            },

            speed: 3,
            color: game.randomColor(),

            moveLeft() {
                this.position.x -= this.speed;
            },

            moveRight() {
                this.position.x += this.speed;
            },

            draw() {
                canvas.drawRectangle({
                    x: this.position.x,
                    y: this.position.y,
                    width: 10,
                    height: 10
                }, 'blue');
            }
        };

        game.startTrackingUserInput(playerCar);

        utils.runInBackground(() => {
            canvas.clear();
            playerCar.draw();
        });
    };

    game.main();
});
