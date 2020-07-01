import { initialState } from '../state/dictionary.state';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as DictionaryAction from '../action/dictionary.action';
import { DictionaryState } from '../state/dictionary.state';
import { Word } from 'src/app/components/game/word.model';

export const dictionaryReducer: ActionReducer<DictionaryState, Action> = createReducer(
	initialState,
	on(DictionaryAction.setWordsFromLS, (state: DictionaryState, action: DictionaryAction.CustomAction): DictionaryState => {
		return {
			...state,
			dictionary: action.dictionary
		};

	}),
	on(DictionaryAction.changeWordStatus, (state: DictionaryState, action: DictionaryAction.CustomAction): DictionaryState => {
		return {
			...state,
			dictionary: state.dictionary.map((item: Word) => {
				if (item.id === action.word.id) {
					return { ...item, isLoading: action.isLoading };
				}
				return item;
			})
		};

	}),

	on(DictionaryAction.setAudioSrc, (state: DictionaryState, action: DictionaryAction.CustomAction): DictionaryState => {
		return {
			...state,
			srcAudio: {src: action.src, word: action.word}
		};

	}),

);

export function StateReducerDictionary(state: DictionaryState | undefined, action: Action): DictionaryState {
	return dictionaryReducer(state, action);
}
