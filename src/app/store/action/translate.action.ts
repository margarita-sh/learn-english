import { createAction, props } from '@ngrx/store';
import { NotAllowedCheck, TypedAction, ActionCreator } from '@ngrx/store/src/models';
import { Action } from '@ngrx/store';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export interface CustomAction extends Action {
	wordTranslate: string[];
	word: string;
	lang: string;
	/* type: string;
	payload?: any; */
	error: string;
}

export const translate: TypeActionCreator<string, { word: string, lang: string }> = createAction(
	'[Translate] translate word',
	props<{ word: string, lang: string }>()
);

export const resultTranslate: TypeActionCreator<string, { wordTranslate: string[]}> = createAction(
	'[Translate] result translate',
	props<{wordTranslate: string[]}>()
);

export const error: TypeActionCreator<string, { error: string}> = createAction(
	'[Translate] error translate',
	props<{error: string}>()
);
