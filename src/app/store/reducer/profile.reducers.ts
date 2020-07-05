import { initialState, ProfileState } from '../state/profile.state';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as ProfileAction from '../action/profile.actions';

export const profileReducer: ActionReducer<ProfileState, Action> = createReducer(
	initialState,
	on(ProfileAction.setProfileUser, (state: ProfileState, action: ProfileAction.CustomAction): ProfileState => {
		return ({
			...state,
			userProfile: action.profile
		});
	}),
	on(ProfileAction.setRivalProfile, (state: ProfileState, action: ProfileAction.CustomAction): ProfileState => {
		return ({
			...state,
			rivalProfile: action.profile
		});
	}),

);

export function StateReducerProfile(state: ProfileState | undefined, action: Action): ProfileState {
	return profileReducer(state, action);
}
