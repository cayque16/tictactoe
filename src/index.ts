import Board from "./core/board";
import {  resultMessages, Results } from "./core/enums/result";
import PlayerBotEasy from "./core/player/player-bot-easy";

const bot1 = new PlayerBotEasy('X')
const bot2 = new PlayerBotEasy('O')

const board = new Board(bot1, bot2)

let result = Results.GAME_IN_PROGRESS
let player1 = true
do {
    result = board.toPlay(player1 ? bot1.myPlay() : bot2.myPlay())
    player1 = !player1
    board.printBoard()
} while (result === Results.GAME_IN_PROGRESS)


console.log(resultMessages[result])