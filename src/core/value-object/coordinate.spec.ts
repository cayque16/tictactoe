import Coordinate from "./coordinate";

describe("Coordinate unit tests", () => {
    it("should throw an error when the position is out of range", () => {
        expect(() => new Coordinate(0)).toThrow("Position out of range");
        expect(() => new Coordinate(10)).toThrow("Position out of range");
    });

    it("should create a new coordinate with a valid position", () => {
        const coordinate = new Coordinate(1);
        expect(coordinate.position).toBe(0);
    });
})