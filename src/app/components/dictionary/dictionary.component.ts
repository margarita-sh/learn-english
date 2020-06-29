import { Component, OnInit, ViewChild } from '@angular/core';
import { DataGameService } from '../game/service/data-game.service';
import { Word } from '../game/word.model';
import { AudioService } from '../game/service/audio.service';
import { TranslateService } from '@ngx-translate/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
	selector: 'app-dictionary',
	templateUrl: './dictionary.component.html',
	styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
	public dictionary: Word[] = [];
	public numberWordsInDictionary: number = null;
	public audio: HTMLAudioElement;
	public displayedColumns: string[] = ['index', 'englishWord', 'russianWord', 'listen', 'actions' ];
	public dataSource: MatTableDataSource<Word> = new MatTableDataSource<Word>(this.dictionary);
	@ViewChild(MatPaginator, {static: true}) public paginator: MatPaginator;

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

	constructor(public dataGameService: DataGameService, public audioService: AudioService, public translate: TranslateService) {
		this.audio = new Audio();
		translate.addLangs(['en', 'ru']);
		translate.setDefaultLang('en');
		const browserLang: any = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
	}

	public ngOnInit(): void {
		this.dataGameService.loadWordList().subscribe((data: Word[]) => {
			this.dictionary = data;
			this.dataSource.data = data;
		});
		this.numberWordsInDictionary = this.dictionary.length;
		this.dataSource.paginator = this.paginator;
		console.log('dictionary', this.numberWordsInDictionary);
	}

	public removeWordFromDictionary(word: Word): void {
		this.dictionary = this.dictionary.filter((item: Word) => item.id !== word.id);
		this.dataGameService.save(this.dictionary);
	}

	public playAudio(word: Word): void {
		this.spinnerButtonOptions.active = true;
		word.isLoading = true;
		this.audioService.getAudio(word.englishWord).
			subscribe((data: any) => {
				data.subscribe((data: any) => {
					this.audio.src = data.location;
					this.audio.play();
					this.spinnerButtonOptions.active = false;
					word.isLoading = false;

				});
			});

	}

	public getSpinnerButtonOptions(word: Word): any {
		return { ...this.spinnerButtonOptions, active: word.isLoading };
	}
}