import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TranslateState } from '../state/translate.state';
import { featureKeyDictionary, DictionaryState } from '../state/dictionary.state';

export const selectStateDictionary: any = createFeatureSelector<TranslateState>(featureKeyDictionary);

// tslint:disable-next-line: max-line-length
export const selectDictionary: any = createSelector(selectStateDictionary, (state: DictionaryState) => state.dictionary);
// tslint:disable-next-line: max-line-length
export const selectDictionaryCount: any = createSelector(selectStateDictionary, (state: DictionaryState) => state.dictionary.length);