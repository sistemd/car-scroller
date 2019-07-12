'use strict';

export class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
    }
    
    drawRect({x, y, width, height}, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    }

    clear(backgroundColor) {
        this.drawRect({
            x: 0, 
            y: 0, 
            width: this.width, 
            height: this.height
        }, backgroundColor);
    }

    get width() {
        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }

    set width(value) {
        this.canvas.width = value;
    }

    set height(value) {
        this.canvas.height = value;
    }
}

export class ScoreDisplay {
    constructor(document) {
        this.p = document.getElementById('score');
    }

    setValue(value) {
        this.p.innerHTML = value.toString();
    }
}

export function drawCar(canvas, car) {
    for (const part of car.physicalParts())
        canvas.drawRect(part.rect, part.color);
}

export function drawCars(canvas, cars) {
    for (const car of cars)
        drawCar(canvas, car);
}

export function drawDecorations(canvas, decorations) {
    for (const decoration of decorations)
        canvas.drawRect(decoration.rect, decoration.color);
}
