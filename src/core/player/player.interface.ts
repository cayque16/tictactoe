import Coordinate from "../value-object/coordinate";

export default interface PlayerInterface {
    symbol: string
    playedCoordinates: Coordinate[]

    myPlay(): Coordinate
    validate(): void
    saveLastCoord(coordinate: Coordinate): void
}