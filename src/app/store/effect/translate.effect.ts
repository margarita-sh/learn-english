import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/components/translator/service/data.service';
import { translate, resultTranslate, CustomAction, error } from '../action/translate.action';
import { TypedAction } from '@ngrx/store/src/models';
import { FullTranslation } from 'src/app/components/translator/fullTranslator.model';

@Injectable()
export class TranslateEffects {

		public translate$: Observable<TypedAction<string>> = createEffect(
			() => this.actions$.pipe(
				ofType(translate),
				mergeMap((action: CustomAction) => this.dataService.translateWord(action.word, action.lang)
					.pipe(
						map((data: FullTranslation) => {
							return resultTranslate({ wordTranslate: data.translate});
						}),
						catchError((e: Error) => of(error({ error: e.message})))
					)
				),
			)
		);
	constructor(
		private actions$: Actions,
		private dataService: DataService,
	) { }

}
