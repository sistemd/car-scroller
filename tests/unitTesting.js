'use strict';

define(() => {
    const unitTesting = {};
    
    unitTesting.AssertionFailed = class extends Error {};
    
    unitTesting.assertTrue = (e) => {
        if (!e)
            throw AssertionFailed;
    };

    unitTesting.assertFalse = (e) => unitTesting.assertTrue(!e);
    
    unitTesting.assertEqual = (e1, e2) => unitTesting.assertTrue(e1 === e2);
    
    unitTesting.assertThrows = (callback, Exception) => {
        try {
            callback();
        } catch (e) {
            if (!e instanceof Exception)
                throw unitTesting.AssertionFailed;
        }
    };
    
    unitTesting.runTestSuite = (suite) => {
        for (let testName in suite) {
            try {
                suite[testName]();
                console.log(`${testName} passed`);
            } catch (e) {
                console.log(`${testName} FAILED`);
                if (!e instanceof unitTesting.AssertionFailed)
                    console.log(`Due to exception ${e}`);
            }
        }
    };
    
    return unitTesting;
});
