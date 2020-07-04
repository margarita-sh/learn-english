import { Component } from '@angular/core';
import { TranslateState } from 'src/app/store/state/translate.state';
import { Store, select } from '@ngrx/store';
import { translate, resultTranslate } from 'src/app/store/action/translate.action';
import { selectError, selectWordTranslate } from 'src/app/store/selectors/translate.selectors';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-translator',
	templateUrl: './translator.component.html',
	styleUrls: ['./translator.component.scss']
})

export class TranslatorComponent {
	public wordTranslate$: Observable<string[]> = this._store$.pipe(select(selectWordTranslate));
	public error$: Observable<string> = this._store$.pipe(select(selectError));
	public word: string;
	public lang: string = 'ru-en';
	// tslint:disable-next-line: no-shadowed-variable
	constructor(public _store$: Store<TranslateState>, public translate: TranslateService) {
		translate.addLangs(['en', 'ru']);
		translate.setDefaultLang('en');
		const browserLang: any = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
	}

	public translateWord(): void {
		return this._store$.dispatch(translate({ word: this.word, lang: this.lang}));
	}

	public onTitleChange(): void {
		if (this.word.length === 0) {
			return this._store$.dispatch(resultTranslate({ wordTranslate: [] }));
		}
	}

	public changeLang(): void {
		if (this.lang === 'ru-en') {
			this.lang = 'en-ru';
		} else {
			this.lang = 'ru-en';
		}
	}
}
