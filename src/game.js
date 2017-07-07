'use strict';

require(['src/graphics', 'src/logic', 'src/utils'], 
        (graphics, logic, utils) => {
    const main = () => {
        let distanceTraveled = 0;

        const canvas = new graphics.Canvas(document);

        const drawCar = (car) => {
            const parts = car.physicalParts();
            for (const part in parts) {
                canvas.drawRect(parts[part].rect, parts[part].color);
            }
        };

        const clearCar = (car) => {
            canvas.clearRect({
                x: car.position.x, 
                y: car.position.y, 
                width: logic.carParts.constants.carWidth, 
                height: logic.carParts.constants.carHeight});
        };

        const playerCar = new logic.PlayerCar();

        canvas.width = logic.constants.mapWidth;
        canvas.height = logic.constants.mapHeight;

        const enemyCars = [];

        const startTrackingUserInput = () => {
            const keyHandler = new logic.KeyHandler(['ArrowLeft', 'ArrowRight'], document);
            utils.runInBackground(() => {
                clearCar(playerCar);
                if (keyHandler.keyIsDown('ArrowLeft'))
                    playerCar.moveLeft();
                if (keyHandler.keyIsDown('ArrowRight'))
                    playerCar.moveRight();
                canvas.context.translate(0, playerCar.speed); // Make a special class to follow the player
                playerCar.moveUp();
                drawCar(playerCar);

                for (const enemyCar of enemyCars)
                    drawCar(enemyCar);
            });
        };

        utils.runEvery(() => {
            enemyCars.push(new logic.EnemyCar(playerCar.position.y-logic.constants.mapHeight));
        }, 3000);

        startTrackingUserInput();
    };

    main();
});
