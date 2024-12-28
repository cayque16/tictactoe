import Board from "./board";
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
})