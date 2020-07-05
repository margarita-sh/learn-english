import { Profile } from 'src/app/components/profile/profile.model';

export interface ProfileState {
	userProfile: Profile;
	rivalProfile: Profile;

}

export const featureKeyProfile: 'PROFILE' = 'PROFILE';

export const initialState: ProfileState = {
	userProfile: new Profile(),
	rivalProfile: new Profile()
};
