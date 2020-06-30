import { createAction, props } from '@ngrx/store';
import { NotAllowedCheck, TypedAction, ActionCreator, Action } from '@ngrx/store/src/models';
import { Word } from 'src/app/components/game/word.model';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export interface CustomAction extends Action {
/* 	type: string;
	payload?: any; */
	dictionary: Word[];
}

export const getWordsFromLS: TypeActionCreator<string, {}> = createAction(
	'[Dictionary] get words from LS',
);

export const setWordsFromLS: TypeActionCreator<string, { dictionary: Word[] }> = createAction(
	'[Dictionary] set words from LS',
	props<{dictionary: Word[]}>()
);
