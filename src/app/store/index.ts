import { ActionReducerMap } from '@ngrx/store';
import { featureKeyCount, CountState } from './state/app.state';
import { StateReducerCount } from './reducer/app.reducers';
import { TranslateState, featureKeyTranslate } from './state/translate.state';
import { StateReducerTranslate } from './reducer/translate.reducer';
import { StateReducerDictionary } from './reducer/dictionary.reducer';
import { featureKeyDictionary, DictionaryState } from './state/dictionary.state';
import { featureKeyGame, GameState } from './state/game.state';
import { StateReducerGame } from './reducer/game.reducer';

export interface IAppState {
[featureKeyCount]: CountState;
[featureKeyTranslate]: TranslateState;
[featureKeyDictionary]: DictionaryState;
[featureKeyGame]: GameState;

}

export const reducer: ActionReducerMap<IAppState> = {
[featureKeyCount]: StateReducerCount,
[featureKeyTranslate]: StateReducerTranslate,
[featureKeyDictionary]: StateReducerDictionary,
[featureKeyGame]: StateReducerGame,
};
