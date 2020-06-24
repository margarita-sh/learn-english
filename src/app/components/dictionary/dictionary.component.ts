import { Component, OnInit } from '@angular/core';
import { DataGameService } from '../game/service/data-game.service';
import { Word } from '../game/word.model';
import { AudioService } from '../game/service/audio.service';

@Component({
	selector: 'app-dictionary',
	templateUrl: './dictionary.component.html',
	styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
	public dictionary: Word[] = [];
	public numberWordsInDictionary: number = null;

	public audio: HTMLAudioElement;

	constructor(public dataGameService: DataGameService, public audioService: AudioService) {
		this.audio = new Audio();
	}

	public ngOnInit(): void {
		this.dataGameService.loadWordList().subscribe((data: Word[]) => this.dictionary = data);
		this.numberWordsInDictionary = this.dictionary.length;
		console.log('dictionary', this.numberWordsInDictionary);
	}

	public removeWordFromDictionary(word: Word): void {
		this.dictionary = this.dictionary.filter((item: Word) => item.id !== word.id);
		this.dataGameService.save(this.dictionary);
	}

	public playAudio(word: Word): void {
		word.isLoading = true;
		this.audioService.getAudio(word.englishWord).
			subscribe((data: any) => {
				data.subscribe((data: any) => {
					this.audio.src = data.location;
					this.audio.play();
					word.isLoading = false;
				});
			});
	}

}
