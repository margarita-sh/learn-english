import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { DataGameService } from 'src/app/components/game/service/data-game.service';
import { getWordsFromLS, setWordsFromLS, removeWordFromDictionary, CustomAction } from '../action/dictionary.action';
import { Word } from 'src/app/components/game/word.model';


@Injectable()
export class DictionaryEffects {
	public getWordsFromLS$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getWordsFromLS),
			mergeMap(() => this.dataGameService.loadWordList()
				.pipe(
					map((dictionary: Word[]) => {
						return setWordsFromLS({ dictionary });
					})
					/* 	catchError(() => of({ type: '[Todo] Todos Loaded Error' })) */
				)
			)
		)
	);

	public removeWord$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(removeWordFromDictionary),
			mergeMap((action: CustomAction) => this.dataGameService.removeWordFromDictionary(action.word)
				.pipe(
					map((dictionary: Word[]) => {
						return setWordsFromLS({ dictionary });
					}),
					//catchError(() => of({ type: '[Todo] Todos Loaded Error' }))
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private dataGameService: DataGameService,
	) { }
}
