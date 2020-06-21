import { Component } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { Word } from './word.model';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DataGameService } from './service/data-game.service';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent {
	public word: Word = null;
	public gameStarted: string = 'start';
	public count: number = null;
	public arrayAnswers: string[] = null;
	public outputResult: string = null;
	public sec: number = 1000;
	public resultDuration: number = 700;
	public correctAnswer: number = null;
	public wrongAnswer: number = null;
	public timeRound: number = 30;
	public arrayForDictionary: Word[] = [];

	public mode: ProgressSpinnerMode = 'determinate';
	public valueProgressSpinner: number;
	public showText: number = this.count;
	public strokeWidth: number = 15;
	public diameter: number = 120;

	constructor(public dataGameService: DataGameService) {

	}

	public game(): void {
		this.gameStarted = 'game';
		this.arrayAnswers = [];
		this.word = this.dataGameService.getRandomWord();
		const wordsForArrayAnswer: Set<string> = new Set();
		wordsForArrayAnswer.add(this.word.russianWord);
		// tslint:disable-next-line: no-magic-numbers
		while (wordsForArrayAnswer.size < 3) {
			const randomRuWord: Word = this.dataGameService.getRandomWord();
			wordsForArrayAnswer.add(randomRuWord.russianWord);
		}
		// tslint:disable-next-line: no-magic-numbers
		this.arrayAnswers = Array.from(wordsForArrayAnswer).sort(() => Math.random() - 0.5);
	}

	public checkAnswer(answer: string): void {
		if (answer === this.word.russianWord) {
			this.outputResult = 'V';
			this.correctAnswer++;
		} else {
			this.outputResult = 'X';
			this.wrongAnswer++;
			this.arrayForDictionary.push(this.word);
		}
		of(this.outputResult).pipe(delay(this.resultDuration)).subscribe(() => {
			this.outputResult = '';
		});
		this.game();
	}

	public startTimer(): void {
		this.game();
		this.count = this.timeRound;
	 	// tslint:disable-next-line: no-magic-numbers
	 	this.valueProgressSpinner = 100;
		interval(this.sec)
			.pipe(
				take(this.timeRound)
			)
			.subscribe((count: number) => {
				count = this.timeRound - (count + 1);
				this.count = count;
				// tslint:disable-next-line: no-magic-numbers
				this.valueProgressSpinner = 100 / this.timeRound * count;
				if (this.count <= 0) {
					this.gameStarted = 'complete';
					console.log('GAME', this.arrayForDictionary);
					this.dataGameService.addWordsDictionary(this.arrayForDictionary);
				}
			});

	}

}
