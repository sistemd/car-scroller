'use strict';
define(() => {
    const utils = {};

    utils.toRad = (degrees) => (degrees*Math.PI)/180;

    utils.defaultCompare = (a, b) => a === b;

    utils.arrayWithValueRemoved = (array, value, compare = utils.defaultCompare) => 
        array.filter((elem) => !compare(elem, value));
    
    utils.runInBackground = (task) => {
        task();
        setTimeout(() => {
            utils.runInBackground(task);
        }, 0);
    };

    utils.contains = (array, element) => array.indexOf(element) !== -1;

    return utils;
});
