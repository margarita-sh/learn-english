import { ActionReducerMap } from '@ngrx/store';
import { featureKeyCount, CountState } from './state/app.state';
import { StateReducerCount } from './reducer/app.reducers';
import { TranslateState, featureKeyTranslate } from './state/translate.state';
import { StateReducerTranslate } from './reducer/translate.reducer';

export interface IAppState {
[featureKeyCount]: CountState;
[featureKeyTranslate]: TranslateState;
}

export const reducer: ActionReducerMap<IAppState> = {
[featureKeyCount]: StateReducerCount,
[featureKeyTranslate]: StateReducerTranslate,
};
