import { Component } from '@angular/core';
import { TranslateState } from 'src/app/store/state/translate.state';
import { Store, select } from '@ngrx/store';
import { translate } from 'src/app/store/action/translate.action';
import { selectWordEng, selectWordRu } from 'src/app/store/selectors/api.selectors';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-translator',
	templateUrl: './translator.component.html',
	styleUrls: ['./translator.component.scss']
})

export class TranslatorComponent {
	public wordsEng$: Observable<any> = this._store$.pipe(select(selectWordEng));
	public wordsRu$: Observable<any> = this._store$.pipe(select(selectWordRu));
	public word: string;
	constructor(public _store$: Store<TranslateState>) {
	}

	public translate(): void {
		return this._store$.dispatch(translate({ wordRu: this.word}));
	}

}
