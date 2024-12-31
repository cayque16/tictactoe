import { Results } from "./enums/result";
import PlayerInterface from "./player/player.interface";
import Coordinate from "./value-object/coordinate";

export default class Board {
    private _board: string[]
    private _player1: PlayerInterface;
    private _player2: PlayerInterface;
    private _inverted: boolean = false
    private _result: Results = Results.GAME_IN_PROGRESS;

    constructor(_player1: PlayerInterface, _player2: PlayerInterface, _inverted?: boolean) {
        this._player1 = _player1;
        this._player2 = _player2;
        this._inverted = _inverted || false;

        this._board = Array(9).fill(' ');
        this.validate();
    }

    toPlay(position: Coordinate): Results {
        if (!this.positionIsEmpty(position)) {
            throw new Error('Position already marked');
        }

        this._board[position.position] = this._inverted ? this._player2.symbol : this._player1.symbol;
        this._inverted = !this._inverted;

        this._player1.saveLastCoord(position);
        this._player2.saveLastCoord(position);

        return this._result = this.checkResult()
    }

    positionIsEmpty(position: Coordinate): boolean {
        return this._board[position.position] === ' ';
    }

    checkResult(): Results {
        const winCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //lines
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
            [0, 4, 8], [2, 4, 6], //diagonals
        ];

        const checkWin = (player: string) => {
            return winCombinations.some(combination =>
                combination.every(index => this._board[index] === player)
            )
        }

        if (checkWin(this._player1.symbol))
            return Results.PLAYER_ONE_WINS
        if (checkWin(this._player2.symbol))
            return Results.PLAYER_TWO_WINS
        if (this.boardIsFull())
            return Results.DRAW
        return Results.GAME_IN_PROGRESS
    }

    private boardIsFull(): boolean {
        return this._board.every(cell => cell === this._player1.symbol || cell === this._player2.symbol);
    }

    printBoard(clearConsole = true): void {
        if (clearConsole) console.clear();
        for (let i = 0; i < this._board.length; i += 3) {
            console.log(this._board.slice(i, i + 3).join(' | '))
        }
    }

    private validate(): void {
        if (this._player1.symbol === this._player2.symbol)
            throw new Error('Both players must have different symbols');
    }
}