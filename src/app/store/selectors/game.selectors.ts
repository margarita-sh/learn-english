import { createFeatureSelector, createSelector} from '@ngrx/store';
import { GameState, featureKeyGame } from '../state/game.state';

export const selectGameFeature: any = createFeatureSelector<GameState>(featureKeyGame);
export const selectStatusGame: any = createSelector(
	selectGameFeature,
	(state: GameState): string => state.gameStatus
);
