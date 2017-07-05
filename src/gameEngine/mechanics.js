'use strict';

define(['src/utils'], (utils) => {
    const mechanics = {
        internal: {}
    };
    
    mechanics.pointsAdded = (p1, p2) => {
        return {
            x: p1.x+p2.x,
            y: p1.y+p2.y
        };
    };

    mechanics.pointsSubtracted = (p1, p2) => {
        return {
            x: p1.x-p2.x,
            y: p1.y-p2.y
        };
    };

    mechanics.pointsAreEqual = (p1, p2) => p1.x === p2.x && p1.y === p2.y;
    
    mechanics.internal.KeyTracker = class {
        constructor() {
            this._isDownMap = new Map();
        }
        
        setKeyDown(key) {
            this._isDownMap.set(key, true);
        }
        
        setKeyUp(key) {
            this._isDownMap.set(key, false);
        }
        
        keyIsDown(key) {
            return this._isDownMap.has(key) ? this._isDownMap.get(key) : false;
        }
    };

    mechanics.KeyHandler = class {
        constructor(keysArray, document) {
            this._keyTracker = new mechanics.internal.KeyTracker();
            
            document.onkeydown = mechanics.KeyHandler._eventCallbackForKeyInKeys(keysArray, (key) => {
                this._keyTracker.setKeyDown(key);
            });

            document.onkeyup = mechanics.KeyHandler._eventCallbackForKeyInKeys(keysArray, (key) => {
                this._keyTracker.setKeyUp(key);
            });
        }
        
        static _eventCallbackForKeyInKeys(keysArray, callback) {
            return (event) => {
                if (utils.contains(keysArray, event.key))
                    callback(event.key);
                else
                    console.log('Nope');
            };
        }

        keyIsDown(key) {
            return this._keyTracker.keyIsDown(key);
        }
    };
    
    return mechanics;
});