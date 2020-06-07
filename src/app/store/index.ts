import { ActionReducerMap } from '@ngrx/store';
import { featureKeyCount, CountState } from './app.state';
import { StateReducerCount } from './app.reducers';

export interface IAppState {
[featureKeyCount]: CountState;
}

export const reducer: ActionReducerMap<IAppState> = {
[featureKeyCount]: StateReducerCount
};
