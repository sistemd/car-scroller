'use strict';

define(['src/utils'], (utils) => {
    const graphics = {
        internal: {}
    };
    
    graphics.Canvas = class {
        constructor(document) {
            this._canvas = document.getElementById('canvas');
            this._context = this._canvas.getContext('2d');
        }
        
        drawRectangle({x, y, width, height}, color) {
            this._context.fillStyle = color;
            this._context.fillRect(x, y, width, height);
        }
        
        clear() {
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        }

        get width() {
            return this._canvas.width;
        }

        get height() {
            return this._canvas.height;
        }
    };
    
    graphics.ImageNotCached = class extends Error {};

    graphics.ImageCache = class {
        constructor(...fileNames) {
            this._images = new Map();
            this._loadedCount = 0;
        }

        loadFiles(fileName, fileNames) {
            this._images[fileName] = graphics.internal.imageWithSrc(fileName);
            this._images[fileName].addEventListener('load', () => {
                ++this._loadedCount;
            });
        }

        whenLoaded(callback) {
            utils.runInBackground(() => {
                if (this._images.size === this._loadedCount)
                    callback();
            });
        }

        image(fileName) {
            return this._images[fileName];
        }
    };

    graphics.internal.imageWithSrc = (src) => {
        const result = new Image();
        result.src = src;
        return result;
    };

    return graphics;
});