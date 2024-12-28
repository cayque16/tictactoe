export default class Coordinate {
    private _position: number

    constructor(position: number) {
        if (position < 1 || position > 9) {
            throw new Error("Position out of range");
        }
        this._position = position;
    }

    get position(): number {
        return this._position - 1;
    }
}