import { createAction, props } from '@ngrx/store';
import { NotAllowedCheck, TypedAction, ActionCreator } from '@ngrx/store/src/models';
import { Action } from '@ngrx/store';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export interface CustomAction extends Action {
	wordEng: string[];
	wordRu: string;
	type: string;
	payload?: any;
}

export const translate: TypeActionCreator<string, { payload: any }> = createAction(
	'[Translate] translate word',
	props<{ payload: string }>()
);

export const resultTranslate: TypeActionCreator<string, { wordEng: string[],  wordRu: string}> = createAction(
	'[Translate] result translate',
	props<{
		wordEng: string[],
		wordRu: string
	}>()
);
