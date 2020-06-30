import { Component } from '@angular/core';
import { TranslateState } from 'src/app/store/state/translate.state';
import { Store, select } from '@ngrx/store';
import { translate, resultTranslate } from 'src/app/store/action/translate.action';
import { selectWordEng, selectError } from 'src/app/store/selectors/translate.selectors';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-translator',
	templateUrl: './translator.component.html',
	styleUrls: ['./translator.component.scss']
})

export class TranslatorComponent {
	public wordsEng$: Observable<string[]> = this._store$.pipe(select(selectWordEng));
	public error$: Observable<string> = this._store$.pipe(select(selectError));
	public word: string;
	// tslint:disable-next-line: no-shadowed-variable
	constructor(public _store$: Store<TranslateState>, public translate: TranslateService) {
		translate.addLangs(['en', 'ru']);
		translate.setDefaultLang('en');
		const browserLang: any = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
	}

	public translateWord(): void {
		return this._store$.dispatch(translate({ wordRu: this.word }));
	}

	public onTitleChange(): void {
		if (this.word.length === 0) {
			return this._store$.dispatch(resultTranslate({ wordEng: [] }));
		}
	}
}
