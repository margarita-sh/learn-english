import { createAction, props } from '@ngrx/store';
import { NotAllowedCheck, TypedAction, ActionCreator, Action } from '@ngrx/store/src/models';
import { Word } from 'src/app/components/game/word.model';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export interface CustomAction extends Action {
	dictionary: Word[];
	word: Word;
	isLoading: boolean;
	src: string;
}

export const getWordsFromLS: TypeActionCreator<string, {}> = createAction(
	'[Dictionary] get words from LS',
);

export const setWordsFromLS: TypeActionCreator<string, { dictionary: Word[] }> = createAction(
	'[Dictionary] set words from LS',
	props<{dictionary: Word[]}>()
);

export const removeWordFromDictionary: TypeActionCreator<string, { word: Word }> = createAction(
	'[Dictionary] remove word from dictionary',
	props<{word: Word}>()
);

export const changeWordStatus: TypeActionCreator<string, { word: Word, isLoading: boolean }> = createAction(
	'[Dictionary] change status word',
	props<{word: Word}>()
);

export const getAudioSrc: TypeActionCreator<string, { word: Word }> = createAction(
	'[Dictionary] get audio src',
	props<{word: Word}>()
);

export const setAudioSrc: TypeActionCreator<string, {word: Word, src: string }> = createAction(
	'[Dictionary] set audio src',
	props<{word: Word, src: string}>()
);
