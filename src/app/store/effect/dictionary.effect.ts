import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { DataGameService } from 'src/app/components/game/service/data-game.service';
import { getWordsFromLS, setWordsFromLS } from '../action/dictionary.action';

@Injectable()
export class DictionaryEffects {
	public getWordsFromLS$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getWordsFromLS),
			mergeMap(() => this.dataGameService.loadWordList()
				.pipe(
					map(dictionary => {
						return setWordsFromLS({ dictionary });
					}),
					/* 	catchError(() => of({ type: '[Todo] Todos Loaded Error' })) */
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private dataGameService: DataGameService,
	) { }
}