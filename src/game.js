'use strict';

// Problems:
// No clearing
// Convoluted main code
// Somewhat bad rectanglesAreOverlapped code

require(['src/graphics', 'src/logic', 'src/utils'], 
        (graphics, logic, utils) => {
    const main = () => {
        const canvas = new graphics.Canvas(document);

        canvas.width = logic.constants.mapWidth;
        canvas.height = logic.constants.mapHeight;

        const drawCar = (car) => {
            for (const part of car.physicalParts())
                canvas.drawRect(part.rect, part.color);
        };

        const drawEnemyCars = (enemyCars) => {
            for (const enemyCar of enemyCars)
                drawCar(enemyCar);
        };

        const playerCar = logic.PlayerCar.atDefaultPosition();
        let enemyCars = [];

        const crashHasHappened = () => {
            for (const enemyCar of enemyCars)
                if (logic.carsCrashed(enemyCar, playerCar))
                    return true;
            return false;
        };

        const showScore = () => {
            alert(`Score: ${Math.floor(distanceTraveled/1000)}`);
        };

        const clearCanvas = () => canvas.clear();

        let distanceTraveled = 0;

        const enemyCarSpeed = () => logic.speedBasedOnDistanceTraveled(distanceTraveled);

        const playerCarSpeed = () => enemyCarSpeed()*2;

        const gameView = new logic.GameView()
            .addMovingObject(playerCar, playerCarSpeed);

        const moveAllObjects = () => {
            const speed = playerCarSpeed();
            distanceTraveled += speed;
            gameView.moveEverythingUp(speed);
            if (keyHandler.keyIsDown('ArrowLeft'))
                playerCar.moveLeft(speed, 0);
            if (keyHandler.keyIsDown('ArrowRight'))
                playerCar.moveRight(speed, logic.constants.mapWidth-logic.carParts.constants.carWidth);
        };

        const destroyOffscreenObjects = () => {
            enemyCars = logic.activeCars(enemyCars);
        };

        const drawEverything = () => {
            drawCar(playerCar);
            for (const enemyCar of enemyCars)
                drawCar(enemyCar);
        };

        const keyHandler = new logic.KeyHandler(['ArrowLeft', 'ArrowRight'], document);

        // For consistency and quality
        // we should have both hspeed and vspeed calculators
        const game = new logic.Game({
            gameOverChecker: crashHasHappened,
            onGameOver: showScore
        });

        game.addEachFrameCallback(clearCanvas)
            .addEachFrameCallback(moveAllObjects)
            .addEachFrameCallback(destroyOffscreenObjects)
            .addEachFrameCallback(drawEverything);
        
        const createNewEnemyCar = () => {
            const enemyCar = logic.EnemyCar.atRandomPosition();
            enemyCars.push(enemyCar);
            gameView.addMovingObject(enemyCar, enemyCarSpeed);
        };

        game.runEveryCalculated(() => {
            ;
        }, () => 1600/logic.speedBasedOnDistanceTraveled(distanceTraveled));

        game.run();
    };

    main();
});
