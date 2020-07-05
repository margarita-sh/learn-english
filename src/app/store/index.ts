import { ActionReducerMap } from '@ngrx/store';
import { TranslateState, featureKeyTranslate } from './state/translate.state';
import { StateReducerTranslate } from './reducer/translate.reducer';
import { StateReducerDictionary } from './reducer/dictionary.reducer';
import { featureKeyDictionary, DictionaryState } from './state/dictionary.state';
import { featureKeyGame, GameState } from './state/game.state';
import { StateReducerGame } from './reducer/game.reducer';
import { ProfileState, featureKeyProfile } from './state/profile.state';
import { StateReducerProfile } from './reducer/profile.reducers';

export interface IAppState {
[featureKeyTranslate]: TranslateState;
[featureKeyDictionary]: DictionaryState;
[featureKeyGame]: GameState;
[featureKeyProfile]: ProfileState;

}

export const reducer: ActionReducerMap<IAppState> = {
[featureKeyTranslate]: StateReducerTranslate,
[featureKeyDictionary]: StateReducerDictionary,
[featureKeyGame]: StateReducerGame,
[featureKeyProfile]: StateReducerProfile,
};
