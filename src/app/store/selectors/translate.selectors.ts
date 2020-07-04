import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TranslateState, featureKeyTranslate } from '../state/translate.state';

export const selectStateTranslate: any = createFeatureSelector<TranslateState>(featureKeyTranslate);

// tslint:disable-next-line: max-line-length
export const selectWordTranslate: any = createSelector(selectStateTranslate, (state: TranslateState) => state.wordTranslate);
// tslint:disable-next-line: max-line-length
export const selectWord: any = createSelector(selectStateTranslate, (state: TranslateState) => state.word);

export const selectError: any = createSelector(selectStateTranslate, (state: TranslateState) => state.error);
