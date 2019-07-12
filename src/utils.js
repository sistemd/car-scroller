'use strict';

export function repeatTask({task, milliseconds}) {
    if (milliseconds === undefined) {
        runTask(task);
        return;
    }

    let timer = milliseconds();

    runTask(timeDelta => {
        timer -= timeDelta;

        if (timer <= 0) {
            timer = milliseconds();
            task();
        }
    })
}

function runTask(task) {
    let lastCall = null;

    function step(timestamp) {
        requestAnimationFrame(step);

        if (lastCall === null) {
            lastCall = timestamp;
            return;
        }

        const timeDelta = timestamp - lastCall;
        lastCall = timestamp;
        task(timeDelta);
    }

    requestAnimationFrame(step);
}

export function randomElement(array) {
    return array[randomRange(0, array.length)];
} 

// min is included in the range, max isn't
export function randomRange(min, max) {
    return min + Math.floor(Math.random() * (max-min));
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