import { createAction, props } from '@ngrx/store';
import { NotAllowedCheck, TypedAction, ActionCreator } from '@ngrx/store/src/models';
import {  Action } from '@ngrx/store';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export interface CustomAction extends Action {
	type: string;
	payload?: any;
}

export const increase: TypeActionCreator<string, { data?: any}> = createAction(
	'[Count] increase'
);

export const decrease: TypeActionCreator<string, { data?: any }> = createAction(
	'[Count] decrease'
);

export const clear: TypeActionCreator<string, { data?: any }> = createAction(
	'[Count] clear'
);

export const updatedAt: TypeActionCreator<string, { payload: any }> = createAction(
	'[Count] updated at',
	props<{payload: number}>()
);
