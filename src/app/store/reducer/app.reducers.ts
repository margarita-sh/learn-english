import { initialState, CountState } from '../state/app.state';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as CountAction from '../action/app.actions';

export const countReducer: ActionReducer<CountState, Action> = createReducer(
	initialState,
	on(CountAction.increase, (state: CountState): CountState => {
		return ({
			...state,
			count: state.count + 1
		});
	}),
	on(CountAction.decrease, (state: CountState): CountState => {
		return {
			...state,
			count: state.count - 1
		};
	}),
	on(CountAction.clear, (state: CountState): CountState => {
		return {
			...state,
			count: 0
		};
	}),
	on(CountAction.updatedAt, (state: CountState, action: CountAction.CustomAction): CountState => {
		return {
			...state,
			updatedAt: action.payload
		};
	})
);

export function StateReducerCount(state: CountState | undefined, action: Action): CountState {
	return countReducer(state, action);
}
