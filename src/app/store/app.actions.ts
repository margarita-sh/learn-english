import { createAction } from '@ngrx/store';
import { NotAllowedCheck, TypedAction, ActionCreator } from '@ngrx/store/src/models';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export const increase: TypeActionCreator<string, { data?: any}> = createAction(
	'[Count] increase'
);

export const decrease: TypeActionCreator<string, { data?: any }> = createAction(
	'[Count] decrease'
);

export const clear: TypeActionCreator<string, { data?: any }> = createAction(
	'[Count] clear'
);
