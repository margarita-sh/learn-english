import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { Translator } from './modelTranslator';
import { TranslateState } from 'src/app/store/state/translate.state';
import { Store } from '@ngrx/store';
import { filter, debounceTime, catchError } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { translate } from 'src/app/store/action/translate.action';

@Component({
	selector: 'app-translator',
	templateUrl: './translator.component.html',
	styleUrls: ['./translator.component.scss']
})

export class TranslatorComponent {
	/* public findControl = new FormControl();
	public word: Translator = null;
	public error: boolean;
	*/
	constructor(public _store$: Store<TranslateState>) {
	}

	public translate(): void {
		return this._store$.dispatch(translate({ payload: 'Привет' }));
	}

	/*   public ngOnInit(): void {
		this.findControl.valueChanges
		.pipe(filter(value => {
			return value.length > 2;
		}),
		debounceTime(1000),
			switchMap(value =>
			this.dataService.translateWord(value).pipe(
			catchError(err => {
			this.word = null;
			this.error = true;
			return EMPTY;
			})
			)
			)
			)
			.subscribe(word => {
			this.word = word;
			this.error = false;
			});
	  }*/
}
/*    public serch(): void {
  this._store$.dispatch.translate({});
  } */
/*
public dataService.translateWord().subscribe((data: Translator[]) => {
return data;
});  */
