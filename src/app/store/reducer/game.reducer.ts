import { initialState } from '../state/game.state';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as GameAction from '../action/game.action';
import { GameState } from '../state/game.state';

export const gameReducer: ActionReducer<GameState, Action> = createReducer(

	initialState,
	on(GameAction.setGameStatus, (state: GameState, action: GameAction.CustomAction): GameState => {
		return ({
			...state,
			gameStatus: action.gameStatus
		});
	}),

	on(GameAction.setNewQuestion, (state: GameState, action: GameAction.CustomAction): GameState => {
		return ({
			...state,
			word: action.word,
			answers: action.answers
		});
	}),
);

export function StateReducerGame(state: GameState | undefined, action: Action): GameState {
	return gameReducer(state, action);
}
