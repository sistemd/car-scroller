'use strict';
define(() => {
    const utils = {};

    utils.contains = (array, element) => array.indexOf(element) !== -1;
    
    utils.runEvery = (task, milliseconds) => { // Bad name?
        setTimeout(() => {
            utils.runInBackground(task);
            task();
        }, milliseconds);
    };

    utils.runInBackground = (task) => utils.runEvery(task, 0);

    utils.randomElement = (array) => array[utils.randomRange(0, array.length)];
    
    utils.randomRange = (from, to) => from + Math.floor(Math.random() * (to-from));

    return utils;
});
