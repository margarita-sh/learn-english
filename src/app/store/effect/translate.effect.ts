import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/components/translator/service/data.service';
import { translate, resultTranslate, CustomAction } from '../action/translate.action';
import { TypedAction } from '@ngrx/store/src/models';
import { FullTranslation } from 'src/app/components/translator/fullTranslator.model';

@Injectable()
export class TranslateEffects {

		public translate$: Observable<TypedAction<string>> = createEffect(
			() => this.actions$.pipe(
				ofType(translate),
				mergeMap((action: CustomAction) => this.dataService.translateWord(action.wordRu)
					.pipe(
						map((data: FullTranslation) => {
							return resultTranslate({ wordEng: data.translate});
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
