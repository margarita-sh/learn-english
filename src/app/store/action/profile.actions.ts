import { createAction, props } from '@ngrx/store';
import { NotAllowedCheck, TypedAction, ActionCreator } from '@ngrx/store/src/models';
import { Action } from '@ngrx/store';
import { Profile } from 'src/app/components/profile/profile.model';

type TypeActionCreator<S extends string, O extends object> = ActionCreator<
	S, (props: O & NotAllowedCheck<O>) => & TypedAction<S>
>;

export interface CustomAction extends Action {
	profile: Profile;
}

export const saveProfileUser: TypeActionCreator<string, { profile: Profile }> = createAction(
	'[Profile] save profile user',
	props<{ profile: Profile }>()
);

export const setProfileUser: TypeActionCreator<string, { profile: Profile }> = createAction(
	'[Profile] set profile user',
	props<{ profile: Profile }>()
);

export const getProfileUserFromLS: TypeActionCreator<string, {}> = createAction(
	'[Profile] get profile user from LS'
);

export const getRivalProfile: TypeActionCreator<string, {}> = createAction(
	'[Profile] get profile rival',
);

export const setRivalProfile: TypeActionCreator<string, { profile: Profile }> = createAction(
	'[Profile] set profile rival',
	props<{ profile: Profile }>()
);
