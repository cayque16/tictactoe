import Coordinate from "../value-object/coordinate";
import PlayerAbstract from "./player-abstract";

export default class PlayerBotEasy extends PlayerAbstract {
    myPlay(): Coordinate {
        let position = 0
        while (position === 0) {
            position = this.getRandomIntInclusive(1, 9);
            if (this.playedCoordinates.some(coord => coord.position === position - 1)) {
                position = 0;
            }
        }
        return new Coordinate(position);
    }

    private getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}