import { createFeatureSelector, createSelector} from '@ngrx/store';
import { GameState, featureKeyGame } from '../state/game.state';
import { Word } from 'src/app/components/game/word.model';

export const selectGameFeature: any = createFeatureSelector<GameState>(featureKeyGame);
export const selectStatusGame: any = createSelector(
	selectGameFeature,
	(state: GameState): string => state.gameStatus
);

export const selectWord: any = createSelector(
	selectGameFeature,
	(state: GameState): Word => state.word
);

export const selectAnswers: any = createSelector(
	selectGameFeature,
	(state: GameState): string[] => state.answers
);
