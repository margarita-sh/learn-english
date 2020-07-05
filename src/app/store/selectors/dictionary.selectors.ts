import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { featureKeyDictionary, DictionaryState } from '../state/dictionary.state';

export const selectStateDictionary: MemoizedSelector<object, DictionaryState> =
 createFeatureSelector<DictionaryState>(featureKeyDictionary);

// tslint:disable-next-line: max-line-length
export const selectDictionary: any = createSelector(selectStateDictionary, (state: DictionaryState) => state.dictionary);
// tslint:disable-next-line: max-line-length
export const selectDictionaryCount: any = createSelector(selectStateDictionary, (state: DictionaryState) => state.dictionary.length);

export const selectSrcAudio: any = createSelector(selectStateDictionary, (state: DictionaryState) => state.srcAudio);
