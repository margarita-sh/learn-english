
export interface GameState {
	gameStatus: string;
}

export const featureKeyGame: 'GAME' = 'GAME';

export const initialState: GameState = {
	gameStatus: 'profile'
};
