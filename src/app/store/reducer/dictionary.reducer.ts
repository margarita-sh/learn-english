import { initialState} from '../state/dictionary.state';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as DictionaryAction from '../action/dictionary.action';
import { DictionaryState } from '../state/dictionary.state';

export const dictionaryReducer: ActionReducer<DictionaryState, Action> = createReducer(
	initialState,
	on(DictionaryAction.setWordsFromLS, (state: DictionaryState, action: DictionaryAction.CustomAction): DictionaryState => {
		return {
			...state,
			dictionary: action.dictionary
		};

	}),

);

export function StateReducerDictionary(state: DictionaryState | undefined, action: Action): DictionaryState {
	return dictionaryReducer(state, action);
}
