import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKeyProfile, ProfileState } from '../state/profile.state';

export const selectStateProfile: any = createFeatureSelector<ProfileState>(featureKeyProfile);

export const selectRivalProfile: any = createSelector(selectStateProfile, (state: ProfileState) => state.rivalProfile);

export const selectUserProfile: any = createSelector(selectStateProfile, (state: ProfileState) => state.userProfile);
