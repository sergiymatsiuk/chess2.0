type TPosition = [number, number];

type TColor = "white" | "black";

type TFigure = any;

interface TCell {
    position: TPosition,
    color: TColor,
    figure: TFigure,
    show(): void;
}

export default class Cell implements TCell {
    readonly position;
    readonly color;
    readonly figure;

    constructor(position: TPosition, color: TColor, figure: TFigure) {
        this.position = position;
        this.color = color;
        this.figure = figure;
    }

    public show() {
        console.log(this.position);
    }
}