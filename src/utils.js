'use strict';

export function runEveryCalculated(task, millisecondsGetter) {
    setTimeout(() => {
        runEveryCalculated(task, millisecondsGetter);
        task();
    }, millisecondsGetter());
}

export function runEvery(task, milliseconds){
    runEveryCalculated(task, () => milliseconds);
}

export function runInBackground(task) {
    runEvery(task, 0);
}

export function randomElement(array) {
    return array[randomRange(0, array.length)];
} 

// min is included, max isn't
export function randomRange(min, max) {
    return min + Math.floor(Math.random() * (max-min));
}

export function addPoints(p1, p2) {
    return {
        x: p1.x+p2.x,
        y: p1.y+p2.y
    };
}

export function subtractPoints(p1, p2) {
    return {
        x: p1.x-p2.x,
        y: p1.y-p2.y
    };
}

export function pointsAreEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

export function rectanglesOverlap(rect1, rect2) {
    return rectanglePoints(rect1).some(point => pointIsInsideRectangle(point, rect2)) ||
            rectanglePoints(rect2).some(point => pointIsInsideRectangle(point, rect1));
}

export function pointIsInsideRectangle(point, rect) {
    const upperLeftRectPoint = upperLeftPoint(rect);
    const lowerRightRectPoint = lowerRightPoint(rect);
    return (point.x > upperLeftRectPoint.x && point.x < lowerRightRectPoint.x) &&
            (point.y > upperLeftRectPoint.y && point.y < lowerRightRectPoint.y);
}

export function upperLeftPoint(rect) {
    return {x: rect.x, y: rect.y};
}

export function upperRightPoint(rect) {
    return {x: rect.x+rect.width, y: rect.y};
}

export function lowerLeftPoint(rect) {
    return {x: rect.x, y: rect.y+rect.height};
}

export function lowerRightPoint(rect) {
    return {x: rect.x+rect.width, y: rect.y+rect.height};
}

export function rectanglePoints(rectangle) {
    return [
        upperLeftPoint(rectangle),
        upperRightPoint(rectangle),
        lowerLeftPoint(rectangle),
        lowerRightPoint(rectangle)
    ];
}