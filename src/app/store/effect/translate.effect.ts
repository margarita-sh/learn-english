import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/components/translator/service/data.service';
import { translate, resultTranslate, CustomAction } from '../action/translate.action';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class TranslateEffects {

		public translate$: Observable<TypedAction<string>> = createEffect(
			() => this.actions$.pipe(
				ofType(translate),
				mergeMap((action: CustomAction) => this.dataService.translateWord(action.payload)
					.pipe(
						map((data: any) => {
							console.log('data.translations', data.translations);
							console.log('action.payload', action.payload);
							return resultTranslate({ wordEng: data.translations, wordRu: action.payload });
						})
					)
				)
			)
		);
	constructor(
		private actions$: Actions,
		private dataService: DataService,
	) { }

}
