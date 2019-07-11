
const roadDrawingWidth = 30;
const roadDrawingHeight = 120;

export class RoadDrawing {
    static atDefaultPosition(mapWidth) {
        return new RoadDrawing({
            x: mapWidth/2-roadDrawingWidth/2,
            y: -roadDrawingHeight
        });
    }

    constructor(position) {
        this.position = position;
        this.color = 'grey';
        this.verticalSpeed = 0;
    }

    get rect() {
        return {
            x: this.position.x,
            y: this.position.y,
            width: roadDrawingWidth,
            height: roadDrawingHeight
        };
    }
}
