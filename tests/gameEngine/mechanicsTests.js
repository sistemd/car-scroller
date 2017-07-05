define(['tests/unitTesting.js', 'src/gameEngine/mechanics'], (unitTesting, mechanics) => {
    const mechanicsTests = {};

    mechanicsTests.testPointsAreEqual = () => {
        unitTesting.assertTrue(mechanics.pointsAreEqual(
            {x: 33, y: -2}, 
            {x: 33, y: -2}
        ));

        unitTesting.assertFalse(mechanics.pointsAreEqual(
            {x: 1, y: 42},
            {x: 2, y: 42}
        ));

        unitTesting.assertFalse(mechanics.pointsAreEqual(
            {x: 1, y: 42},
            {x: 1, y: 43}
        ));

        unitTesting.assertFalse(mechanics.pointsAreEqual(
            {x: 1, y: 42},
            {x: 2, y: 43}
        ));
    };

    mechanicsTests.testPointsAdded = () => {
        const testAdditionFor = ({point1, point2, result}) => unitTesting.assertTrue(
            mechanics.pointsAreEqual(mechanics.pointsAdded(point1, point2), result)
        );

        testAdditionFor({
            point1: {x: 1, y: 1}, 
            point2: {x: 1, y: 1},
            result: {x: 2, y: 2}
        });

        testAdditionFor({
            point1: {x: -1, y: 1}, 
            point2: {x: 1, y: 1},
            result: {x: 0, y: 2}
        });

        testAdditionFor({
            point1: {x: -1, y: -1}, 
            point2: {x: -1, y: -1},
            result: {x: -2, y: -2}
        });
    };

    mechanicsTests.testPointsSubtracted = () => {
        const testSubtractionFor = ({point1, point2, result}) => unitTesting.assertTrue(
            mechanics.pointsAreEqual(mechanics.pointsSubtracted(point1, point2), result)
        );

        testSubtractionFor({
            point1: {x: 1, y: 1}, 
            point2: {x: 1, y: 1},
            result: {x: 0, y: 0}
        });

        testSubtractionFor({
            point1: {x: -1, y: 1}, 
            point2: {x: 1,  y: 1},
            result: {x: -2, y: 0}
        });

        testSubtractionFor({
            point1: {x: -1, y: -1}, 
            point2: {x: -1, y: -1},
            result: {x: 0,  y: 0}
        });
    };

    mechanicsTests.testInternalKeyTracker = () => {
        const keyTracker = new mechanics.internal.KeyTracker();
        
        unitTesting.assertFalse(keyTracker.keyIsDown('Enter'));
        unitTesting.assertFalse(keyTracker.keyIsDown('ArrowUp'));

        keyTracker.setKeyDown('Enter');

        unitTesting.assertTrue(keyTracker.keyIsDown('Enter'));
        unitTesting.assertFalse(keyTracker.keyIsDown('ArrowUp'));

        keyTracker.setKeyUp('Enter');
        keyTracker.setKeyDown('ArrowUp');

        unitTesting.assertFalse(keyTracker.keyIsDown('Enter'));
        unitTesting.assertTrue(keyTracker.keyIsDown('ArrowUp'));

        keyTracker.setKeyDown('Enter');

        unitTesting.assertTrue(keyTracker.keyIsDown('Enter'));
        unitTesting.assertTrue(keyTracker.keyIsDown('ArrowUp'));
    };

    return mechanicsTests;
});
