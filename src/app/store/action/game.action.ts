import { createAction, props } from '@ngrx/store';
import { NotAllowedCheck, TypedAction, ActionCreator } from '@ngrx/store/src/models';
import {  Action } from '@ngrx/store';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export interface CustomAction extends Action {
	gameStatus: string;
}

export const setGameStatus: TypeActionCreator<string, { gameStatus: string} > = createAction(
	'[Game] set game status',
	 props<{gameStatus: string}>()
);
