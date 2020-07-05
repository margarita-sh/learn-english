import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { DictionaryState } from './store/state/dictionary.state';
import { getWordsFromLS } from './store/action/dictionary.action';
import { DataGameService } from './components/game/service/data-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private translateService: TranslateService,  private _store$: Store<DictionaryState>,
		private dataGameServise: DataGameService) {}
	public ngOnInit(): void {
	  this.translateService.use(environment.defaultLocale);
	  this._store$.dispatch(getWordsFromLS({}));
	  this.dataGameServise.loadWordsHttp();
	}
}
