import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { Observable, of, } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { CustomAction } from '../action/profile.actions';
import { DataGameService } from 'src/app/components/game/service/data-game.service';
import { getNewQuestion, setNewQuestion } from '../action/game.action';
import { Word } from 'src/app/components/game/word.model';

@Injectable()
export class GameEffects {
	public getNewQuestion$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getNewQuestion),
			mergeMap(() => of(1)
				.pipe(
					map(() => {
						const word: Word = this.dataGameService.getRandomWord();
						const answers: string[] = this.dataGameService.getRandomAnswers(word);
						return setNewQuestion({word, answers});
					})
				)
			)
		)
	);


	constructor(
		private actions$: Actions,
		private dataGameService: DataGameService
	) { }
}