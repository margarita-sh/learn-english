import { Word } from 'src/app/components/game/word.model';

export interface GameState {
	gameStatus: string;
	word: Word;
	answers: string[];
}

export const featureKeyGame: 'GAME' = 'GAME';

export const initialState: GameState = {
	gameStatus: 'profile',
	word: new Word(),
	answers: []
};
