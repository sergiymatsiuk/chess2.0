import Cell from "./Cell";

type TPosition = [number, number];

type TColor = "white" | "black";

type TFigure = any;

interface TCell {
    position: TPosition,
    color: TColor,
    figure: TFigure,
    show(): void;
}

type TRow = Array<TCell>;

type TBoard = Array<TRow>;

interface TChess {
    size: number;
    board: TBoard;
}

export default class Chess implements TChess {
    readonly size = 8;
    readonly board: TBoard = [];

    constructor() {
        this.board = this.create();
    }

    get() {
        return this.board;
    }

    create() {
        const localBoard: TBoard = [];
        let count: number = 0;

        for (let i = 0; i < this.size; i++) {
            localBoard[i] = [];

            for (let j = 0; j < this.size; j++) {
                const color = count % 2 === 0 ? 'white' : 'black';

                localBoard[i][j] = new Cell([i, j], color, 'Figure');
                count++;
            }

            count++;
        }

        return localBoard;
    }
}
