import { Component, OnInit } from '@angular/core';
import { DataGameService } from '../game/service/data-game.service';
import { Word } from '../game/word.model';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectDictionary, selectDictionaryCount } from 'src/app/store/selectors/dictionary.selectors';
import { DictionaryState } from 'src/app/store/state/dictionary.state';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	public dictionary: Word[] = [];
	public numberWordsInDictionary: number = null;
	public dictionaryCount$: Observable<number> = this._store$.pipe(select(selectDictionaryCount));
	/* 	public color: string = 'rgb(110,173,216)'; */

	constructor(public dataGameService: DataGameService, public translate: TranslateService, public _store$: Store<DictionaryState>) {
		translate.addLangs(['en', 'ru']);
		translate.setDefaultLang('en');
		const browserLang: any = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
	}

	public ngOnInit(): void {
		/*this.dataGameService.loadWordList().subscribe((data: Word[]) => this.dictionary = data);
		 this.numberWordsInDictionary = this.dictionary.length;*/
		//this.dictionaryCount$.subscribe(count => this.numberWordsInDictionary = count);
	}

}
