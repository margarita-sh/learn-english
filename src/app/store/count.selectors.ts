import { CountState, featureKeyCount } from './app.state';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

export const selectCountFeature: MemoizedSelector<object, CountState> = createFeatureSelector<CountState>(featureKeyCount);
export const selectCount: MemoizedSelector<object, number> = createSelector(
	selectCountFeature,
	(state: CountState): number => state.count
);

export const selectUpdatedAt: MemoizedSelector<object, number> = createSelector(
	selectCountFeature,
	(state: CountState): number => state.updatedAt
);
