import { Component } from '@angular/core';
import { TranslateState } from 'src/app/store/state/translate.state';
import { Store, select } from '@ngrx/store';
import { translate, error } from 'src/app/store/action/translate.action';
import { selectWordEng, selectWordRu, selectError } from 'src/app/store/selectors/api.selectors';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-translator',
	templateUrl: './translator.component.html',
	styleUrls: ['./translator.component.scss']
})

export class TranslatorComponent {
	public wordsEng$: Observable<string[]> = this._store$.pipe(select(selectWordEng));
	public error$: Observable<string> = this._store$.pipe(select(selectError));
	public word: string;
	constructor(public _store$: Store<TranslateState>) {
	}

	public translate(): void {
		return this._store$.dispatch(translate({ wordRu: this.word}));
	}
}
