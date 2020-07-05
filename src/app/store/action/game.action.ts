import { createAction, props } from '@ngrx/store';
import { NotAllowedCheck, TypedAction, ActionCreator } from '@ngrx/store/src/models';
import {  Action } from '@ngrx/store';
import { Word } from 'src/app/components/game/word.model';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export interface CustomAction extends Action {
	gameStatus: string;
	word: Word;
	answers: string[];
}

export const setGameStatus: TypeActionCreator<string, { gameStatus: string} > = createAction(
	'[Game] set game status',
	 props<{gameStatus: string}>()
);

export const getNewQuestion: TypeActionCreator<string, {} > = createAction(
	'[Game] get words for game',
);

export const setNewQuestion: TypeActionCreator<string, { word: Word, answers: string[]} > = createAction(
	'[Game] set words for game',
	props<{word: Word, answers: string[]}>()
);
