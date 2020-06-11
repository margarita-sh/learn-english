import { initialState} from '../state/translate.state';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as TranslateAction from '../action/translate.action';
import { TranslateState } from '../state/translate.state';

export const translateReducer: ActionReducer<TranslateState, Action> = createReducer(
	initialState,
	on(TranslateAction.resultTranslate, (state: TranslateState, action: TranslateAction.CustomAction): TranslateState => {
		return {
			...state,
			wordRu: action.wordRu,
			wordEng: action.wordEng
		};

	})
);

export function StateReducerTranslate(state: TranslateState | undefined, action: Action): TranslateState {
	return translateReducer(state, action);
}