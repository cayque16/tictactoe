import Coordinate from "../value-object/coordinate";
import PlayerBotEasy from "./player-bot-easy";

jest.mock('../value-object/coordinate', () => {
    return jest.fn().mockImplementation((position: number) => {
        return {
            get position() {
                return position - 1;
            }
        }
    });
})

describe("Player Bot Easy tests", () => {
    const symbols = [
        [""],
        ["XX"],
    ]
    it.each(symbols)("should throw a error if symbol invalid", (symbol) => {
        expect(() => new PlayerBotEasy(symbol)).toThrow("The symbol must have exactly one character")
    });

    it("should play a random coordinate", () => {
        const bot = new PlayerBotEasy("X");
        const coordinate = bot.myPlay();
        expect([0, 1, 2, 3, 4, 5, 6, 7, 8]).toContain(coordinate.position);
    });

    it("should not play the same coordinate twice", () => {
        const bot = new PlayerBotEasy("X");
        const positions = [1, 2, 3, 4, 5, 6, 7, 8]

        positions.forEach(x => bot.saveLastCoord(new Coordinate(x)))

        const coordinate = bot.myPlay();
        expect(coordinate.position).toBe(8)
    })
})