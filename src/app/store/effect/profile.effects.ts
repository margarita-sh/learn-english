import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { Observable, of, } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { setProfileUser, saveProfileUser, getProfileUserFromLS, getRivalProfile, setRivalProfile } from '../action/profile.actions';
import { ProfileService } from 'src/app/components/profile/service/profile.service';
import { CustomAction } from '../action/profile.actions';
import { Profile } from 'src/app/components/profile/profile.model';

@Injectable()
export class ProfileEffects {
	public saveProfileUser$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(saveProfileUser),
			mergeMap((action: CustomAction) => of(this.profileService.saveProfile(action.profile.nickname, action.profile.id))
				.pipe(
					map(() => {
						return getProfileUserFromLS({});
					})
				)
			)
		)
	);

	public getProfileUserFromLS$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getProfileUserFromLS),
			mergeMap(() => of(this.profileService.getProfileFromLS())
				.pipe(
					map((profile: Profile) => {
						return setProfileUser({ profile });
					})
				)
			)
		)
	);

	public getRivalProfile$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getRivalProfile),
			mergeMap(() => of(this.profileService.getRandomUser())
				.pipe(
					map((profile: Profile) => {
						return setRivalProfile({ profile });
					})
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private profileService: ProfileService
	) { }
}
