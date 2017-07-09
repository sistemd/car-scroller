'use strict';

// Problems:
// No clearing
// Convoluted main code
// Somewhat bad rectanglesAreOverlapped code

require(['src/graphics', 'src/logic', 'src/utils'], 
        (graphics, logic, utils) => {
    const main = () => {
        let distanceTraveled = 0;

        const canvas = new graphics.Canvas(document);

        const drawCar = (car) => {
            for (const part of car.physicalParts())
                canvas.drawRect(part.rect, part.color);
        };

        const playerCar = logic.PlayerCar.atDefaultPosition();

        canvas.width = logic.constants.mapWidth;
        canvas.height = logic.constants.mapHeight;

        let enemyCars = [];

        let gameOver = false;

        const startTrackingUserInput = () => {
            const keyHandler = new logic.KeyHandler(['ArrowLeft', 'ArrowRight'], document);
            utils.runInBackground(() => {
                if (gameOver) {
                    return;
                }
                
                const speed = logic.speedBasedOnDistanceTraveled(distanceTraveled);
                distanceTraveled += speed;
                canvas.clear();
                if (keyHandler.keyIsDown('ArrowLeft'))
                    playerCar.moveLeft(speed, 0);
                if (keyHandler.keyIsDown('ArrowRight'))
                    playerCar.moveRight(speed, logic.constants.mapWidth-logic.carParts.constants.carWidth);
                logic.moveCarsDown(enemyCars, speed);
                console.log('Before', enemyCars.length);
                enemyCars = logic.activeCars(enemyCars);
                console.log('After', enemyCars.length);
                drawCar(playerCar);

                for (const enemyCar of enemyCars) {
                    drawCar(enemyCar);
                }

                for (const enemyCar of enemyCars) {
                    if (logic.carsCrashed(enemyCar, playerCar)) {
                        alert(`Score: ${Math.floor(distanceTraveled/1000)}`);
                        gameOver = true;
                    }
                }
            });
        };

        utils.runEveryCalculated(() => {
            if (gameOver) {
                return; // Abstractions are fucked up
            }

            enemyCars.push(logic.EnemyCar.atRandomPosition());
        }, () => 1600/logic.speedBasedOnDistanceTraveled(distanceTraveled));

        startTrackingUserInput();
    };

    main();
});
