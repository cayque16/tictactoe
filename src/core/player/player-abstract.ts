import Coordinate from "../value-object/coordinate";
import PlayerInterface from "./player.interface";

export default abstract class PlayerAbstract implements PlayerInterface {
    _symbol: string;
    _playedCoordinates: Coordinate[];

    constructor(symbol: string) {
        this._symbol = symbol;
        this._playedCoordinates = [];

        this.validate();
    }

    abstract myPlay(): Coordinate

    validate(): void {
        if (this.symbol === "" || this.symbol.length != 1)
            throw new Error("The symbol must have exactly one character");
    }

    saveLastCoord(coordinate: Coordinate): void {
        this.playedCoordinates.push(coordinate);
    }

    get playedCoordinates(): Coordinate[] {
        return this._playedCoordinates;
    }

    get symbol(): string {
        return this._symbol;
    }
}