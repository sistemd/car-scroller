export const tireWidth = 7;
export const tireHeight = 15;
export const bonnetWidth = 30;
export const bonnetHeight = 20;
export const roofWidth = bonnetWidth+tireWidth*2;
export const roofHeight = bonnetHeight+50;
export const carWidth = roofWidth+tireWidth*2
export const carHeight = roofHeight+bonnetHeight;

function tire({x, y}) {
    return {
        rect: {
            x, y, 
            width: tireWidth,
            height: tireHeight
        },
        color: 'black'
    };
}

export function carParts(position, color) {
    const bonnet = {
        rect: {
            x: position.x+tireWidth*2, 
            y: position.y, 
            width: bonnetWidth, 
            height: bonnetHeight,
        },
        color
    };
    const roof = {
        rect: {
            x: position.x+tireWidth, 
            y: bonnet.rect.y+bonnetHeight, 
            width: roofWidth,
            height: roofHeight
        },
        color
    };
    const frontLeftTire = tire({
        x: position.x,
        y: roof.rect.y+5
    });
    const bottomLeftTire = tire({
        x: position.x, 
        y: roof.rect.y+roofHeight-20
    });
    const frontRightTire = tire({
        x: roof.rect.x+roofWidth, 
        y: roof.rect.y+5
    });
    const bottomRightTire = tire({
        x: roof.rect.x+roofWidth, 
        y: roof.rect.y+roofHeight-20
    });

    return [
        bonnet, roof, frontLeftTire, bottomLeftTire, frontRightTire, bottomRightTire
    ];
};