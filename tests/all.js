require(['tests/unitTesting', 'tests/gameEngine/mechanicsTests'], (unitTesting, mechanicsTests) => {
    unitTesting.runTestSuite(mechanicsTests);
});
