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

        const moveAllObjects = () => {
            playerCar.updateSpeedBasedOnDistanceTraveled(distanceTraveled);

            const relativitySystem = logic.VerticalRelativitySystem.relativeTo(playerCar);
            
            for (const enemyCar of enemyCars)
                relativitySystem.addElement(enemyCar);

            if (keyHandler.keyIsDown('ArrowLeft'))
                playerCar.moveLeft(0);
            if (keyHandler.keyIsDown('ArrowRight'))
                playerCar.moveRight(logic.constants.mapWidth-logic.carParts.constants.carWidth);

            relativitySystem.moveElements();

            distanceTraveled += playerCar.verticalSpeed;
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

        const game = new logic.Game({
            gameOverChecker: crashHasHappened,
            onGameOver: showScore
        });

        game.addEachFrameCallback(clearCanvas)
            .addEachFrameCallback(moveAllObjects)
            .addEachFrameCallback(destroyOffscreenObjects)
            .addEachFrameCallback(drawEverything);
        
        game.runEveryCalculated(
            () => enemyCars.push(logic.EnemyCar.atRandomPosition()), 
            () => 2800/playerCar.verticalSpeed);

        game.run();
    };

    main();
});
