import { Component } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { Word } from './game.model';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent  /* implements OnInit  */ {
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

	public color: ThemePalette = 'primary';
	public mode: ProgressSpinnerMode = 'determinate';
	public valueProgressSpinner: number;
	public showText: number = this.count;
	public strokeWidth: number = 10;

	public words: Word[] = [{
		englishWord: 'delay',
		russianWord: 'задержка'
	},
	{
		englishWord: 'able',
		russianWord: 'мочь'
	},
	{
		englishWord: 'cat',
		russianWord: 'кот'
	},
	{
		englishWord: 'hello',
		russianWord: 'привет'
	},
	{
		englishWord: 'dog',
		russianWord: 'собака'
	},
	{
		englishWord: 'mood',
		russianWord: 'настроение'
	},
	{
		englishWord: 'chees',
		russianWord: 'сыр'
	},
	{
		englishWord: 'window',
		russianWord: 'окно'
	},
	{
		englishWord: 'sky',
		russianWord: 'небо'
	}
	];

	public getRandomWord(): Word {
		const rand: number = Math.floor(Math.random() * this.words.length);
		const randWord: Word = this.words[rand];
		return randWord;
	}

	public game(): void {
		this.gameStarted = 'game';
		this.arrayAnswers = [];
		this.word = this.getRandomWord();
		const wordsForArrayAnswer: Set<string> = new Set();
		wordsForArrayAnswer.add(this.word.russianWord);
		// tslint:disable-next-line: no-magic-numbers
		while (wordsForArrayAnswer.size < 3) {
			const randomRuWord: Word = this.getRandomWord();
			wordsForArrayAnswer.add(randomRuWord.russianWord);
		}
		// tslint:disable-next-line: no-magic-numbers
		this.arrayAnswers = Array.from(wordsForArrayAnswer).sort(() => Math.random() - 0.5);
	}

	public checkAnswer(answer: string): void {
		this.arrayForDictionary = [];
		if (answer === this.word.russianWord) {
			this.outputResult = 'V';
			this.correctAnswer++;
		} else {
			this.outputResult = 'X';
			this.wrongAnswer++;
			this.arrayForDictionary.push(this.word);
			console.log('arrayForDictionary', this.arrayForDictionary);

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
				console.log(count);
				if (this.count <= 0) {
					this.gameStarted = 'complete';
				}
			});

	}

	/*  public ngOnInit(): void {
	} */
}
