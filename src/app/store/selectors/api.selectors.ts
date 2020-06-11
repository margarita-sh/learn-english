import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TranslateState, featureKeyTranslate } from '../state/translate.state';

export const selectStateTranslate: any = createFeatureSelector<TranslateState>(featureKeyTranslate);

// tslint:disable-next-line: max-line-length
export const selectWordEng: any = createSelector(selectStateTranslate, (state: TranslateState) => state.wordEng);
// tslint:disable-next-line: max-line-length
export const selectWordRu: any = createSelector(selectStateTranslate, (state: TranslateState) => state.wordRu);
