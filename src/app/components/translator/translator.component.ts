import { Component } from '@angular/core';
import { TranslateState } from 'src/app/store/state/translate.state';
import { Store, select } from '@ngrx/store';
import { translate } from 'src/app/store/action/translate.action';
import { selectWordEng } from 'src/app/store/selectors/api.selectors';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-translator',
	templateUrl: './translator.component.html',
	styleUrls: ['./translator.component.scss']
})

export class TranslatorComponent {

	public wordsEng$: Observable<any> = this._store$.pipe(select(selectWordEng));
	constructor(public _store$: Store<TranslateState>) {
	}

	public translate(): void {
		return this._store$.dispatch(translate({ payload: 'Привет' }));
	}

}
