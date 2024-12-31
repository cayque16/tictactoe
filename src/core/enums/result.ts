export enum Results {
    DRAW = 0,
    PLAYER_ONE_WINS = 1,
    PLAYER_TWO_WINS = 2,
    GAME_IN_PROGRESS = 3,
}

export const resultMessages: Record<Results, string> = {
    [Results.DRAW]: 'It\'s a draw!',
    [Results.PLAYER_ONE_WINS]: 'Player 1 wins!',
    [Results.PLAYER_TWO_WINS]: 'Player 2 wins!',
    [Results.GAME_IN_PROGRESS]: 'Game is in progress',
}