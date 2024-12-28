import Board from "./board";
import { Results } from "./enums/result";
import Coordinate from "./value-object/coordinate";

jest.mock('./value-object/coordinate', () => {
    return jest.fn().mockImplementation((position: number) => {
        return {
            get position() {
                return position - 1;
            }
        }
    });
})

describe("Board unit tests", () => {
    it("should return true when a square is empty", () => {
        const board = new Board();
        const coord = new Coordinate(1);
        expect(board.positionIsEmpty(coord)).toBe(true);
    })

    it("should return false when a square is not empty", () => {
        const board = new Board();
        const coord = new Coordinate(1);
        board.toPlay(coord);
        expect(board.positionIsEmpty(coord)).toBe(false);
    })

    it("should throw error if position already marked", () => {
        const board = new Board();
        const coord = new Coordinate(1);
        board.toPlay(coord);
        expect(() => board.toPlay(coord)).toThrow("Position already marked");
    })

    const movesToPlayer1Win = [
        [1, 4, 2, 5, 3],
        [4, 1, 5, 2, 6],
        [7, 1, 8, 2, 9],
        [1, 2, 4, 3, 7],
        [2, 1, 5, 3, 8],
        [3, 1, 6, 2, 9],
        [1, 3, 5, 2, 9],
        [3, 1, 5, 2, 7],
    ]

    it.each(movesToPlayer1Win)("should indicate player 1 as the winner", (move1, move2, move3, move4, move5) => {
        const board = new Board();
        board.toPlay(new Coordinate(move1));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(move2));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(move3));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(move4));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(move5));
        expect(board.checkResult()).toBe(Results.PLAYER_ONE_WINS);
    })

    const movesToPlayer2Win = [
        [8, 1, 4, 2, 5, 3],
        [8, 4, 1, 5, 2, 6],
        [4, 7, 1, 8, 2, 9],
        [8, 1, 2, 4, 3, 7],
        [4, 2, 1, 5, 3, 8],
        [4, 3, 1, 6, 2, 9],
        [4, 1, 3, 5, 2, 9],
        [4, 3, 1, 5, 2, 7],
    ]

    it.each(movesToPlayer2Win)("should indicate player 2 as the winner", (move1, move2, move3, move4, move5, move6) => {
        const board = new Board();
        board.toPlay(new Coordinate(move1));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(move2));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(move3));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(move4));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(move5));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(move6));
        expect(board.checkResult()).toBe(Results.PLAYER_TWO_WINS);
    })

    it("should indicate a draw", () => {
        const board = new Board();
        board.toPlay(new Coordinate(1));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(3));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(2));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(4));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(6));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(5));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(7));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(9));
        expect(board.checkResult()).toBe(Results.GAME_IN_PROGRESS);
        board.toPlay(new Coordinate(8));
        expect(board.checkResult()).toBe(Results.DRAW);
    })
})