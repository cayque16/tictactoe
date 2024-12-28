import Coordinate from "./value-object/coordinate";

export default class Board {
    private _board: string[]
    private _player1: string = 'X'
    private _player2: string = 'O'
    private _inverted: boolean = false

    constructor(_player1?: string, _player2?: string, _inverted?: boolean) {
        this._player1 = _player1 || 'X';
        this._player2 = _player2 || 'O';
        this._inverted = _inverted || false;

        this._board = Array(9).fill(' ');
    }

    toPlay(position: Coordinate): void {
        if (!this.positionIsEmpty(position)) {
            throw new Error('Position already marked');
        }

        this._board[position.position] = this._inverted ? this._player2 : this._player1;
        this._inverted = !this._inverted;

        // this.printBoard()
        // console.log(this.checkResult())
    }

    positionIsEmpty(position: Coordinate): boolean {
        return this._board[position.position] === ' ';
    }
}