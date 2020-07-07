import { Component } from '@angular/core';
import { DataGameService } from '../game/service/data-game.service';
import { Word } from '../game/word.model';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectDictionaryCount } from 'src/app/store/selectors/dictionary.selectors';
import { DictionaryState } from 'src/app/store/state/dictionary.state';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
	public dictionary: Word[] = [];
	public numberWordsInDictionary: number = null;
	public dictionaryCount$: Observable<number> = this._store$.pipe(select(selectDictionaryCount));

	constructor(public dataGameService: DataGameService, public translate: TranslateService, public _store$: Store<DictionaryState>) {
		translate.addLangs(['en', 'ru']);
		translate.setDefaultLang('en');
		const browserLang: any = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
	}

}
