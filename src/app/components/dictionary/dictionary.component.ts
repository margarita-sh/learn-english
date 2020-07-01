import { Component, OnInit, ViewChild } from '@angular/core';
import { DataGameService } from '../game/service/data-game.service';
import { Word } from '../game/word.model';
import { AudioService } from '../game/service/audio.service';
import { TranslateService } from '@ngx-translate/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Store, select } from '@ngrx/store';
import { DictionaryState } from 'src/app/store/state/dictionary.state';
import { getWordsFromLS, removeWordFromDictionary, changeWordStatus, getAudioSrc } from 'src/app/store/action/dictionary.action';
import { Observable, PartialObserver } from 'rxjs';
import { selectDictionary, selectSrcAudio } from 'src/app/store/selectors/dictionary.selectors';
import { Dictionary } from './dictionary.model';

@Component({
	selector: 'app-dictionary',
	templateUrl: './dictionary.component.html',
	styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
	public dictionary$: Observable<Word[]> = this._store$.pipe(select(selectDictionary));
	public srcAudio$: Observable<object> = this._store$.pipe(select(selectSrcAudio));
	public audio: HTMLAudioElement;
	public displayedColumns: string[] = ['index', 'englishWord', 'russianWord', 'listen', 'actions'];
	public dataSource: MatTableDataSource<Word> = new MatTableDataSource<Word>();
	@ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;

	public spinnerButtonOptions: MatProgressButtonOptions = {
		active: false,
		text: '🔈',
		spinnerSize: 18,
		raised: true,
		stroked: false,
		buttonColor: 'primary',
		spinnerColor: 'accent',
		fullWidth: false,
		disabled: false,
		mode: 'indeterminate',
	};

	constructor(public dataGameService: DataGameService, public audioService: AudioService,
		public translate: TranslateService, public _store$: Store<DictionaryState>) {
		this.audio = new Audio();
		translate.addLangs(['en', 'ru']);
		translate.setDefaultLang('en');
		const browserLang: any = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
	}

	public ngOnInit(): void {
		this._store$.dispatch(getWordsFromLS({}));
		this.dictionary$.subscribe((data: Word[]) => {
			this.dataSource.data = data;
			this.dataSource.paginator = this.paginator;
		});

		this.srcAudio$.subscribe((data: Dictionary) => {
			if (!data.src) {
				return;
			}
			this.audio.src = data.src;
			this.audio.play();
			this.spinnerButtonOptions.active = false;
			this._store$.dispatch(changeWordStatus({ word: data.word, isLoading: false }));

		});
	}

	public removeWordFromDictionary(word: Word): void {
		this._store$.dispatch(removeWordFromDictionary({ word }));
	}

	public playAudio(word: Word): void {
		this.spinnerButtonOptions.active = true;
		this._store$.dispatch(changeWordStatus({ word, isLoading: true }));
		this._store$.dispatch(getAudioSrc({ word }));
	}

	/* public playAudio(word: Word): void {
		this.spinnerButtonOptions.active = true;
		this._store$.dispatch(changeWordStatus({ word, isLoading: true}));
		this.audioService.getAudio(word.englishWord).
			subscribe((data: any) => {
				// tslint:disable-next-line: no-shadowed-variable
				data.subscribe((data: any) => {
					this.audio.src = data.location;
					this.audio.play();
					this.spinnerButtonOptions.active = false;
					this._store$.dispatch(changeWordStatus({ word, isLoading: false }));
				});
			});

	} */

	public getSpinnerButtonOptions(word: Word): any {
		return { ...this.spinnerButtonOptions, active: word.isLoading };
	}
}
