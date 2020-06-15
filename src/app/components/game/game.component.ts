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

	public color: ThemePalette = 'primary';
	public mode: ProgressSpinnerMode = 'determinate';
	public valueProgressSpinner: number = 100;
	public curSec: number = 0;
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
		const randomRuWordFirst: Word = this.getRandomWord();
		const randomRuWordSecond: Word = this.getRandomWord();
		const randomRuWordThird: Word = this.getRandomWord();
		wordsForArrayAnswer.add(this.word.russianWord);
		wordsForArrayAnswer.add(randomRuWordFirst.russianWord);
		wordsForArrayAnswer.add(randomRuWordSecond.russianWord);
			if ( wordsForArrayAnswer.size < 3 ) {
				wordsForArrayAnswer.add(randomRuWordThird.russianWord);
			}
			this.arrayAnswers = Array.from(wordsForArrayAnswer).sort(() => Math.random() - 0.5);
	}

	public checkAnswer(answer: string): void {
		if (answer === this.word.russianWord) {
			this.outputResult = 'V';
			this.correctAnswer++;
		} else {
			this.outputResult = 'X';
			this.wrongAnswer++;
		}
		of(this.outputResult).pipe(delay(this.resultDuration)).subscribe(() => {
			this.outputResult = '';
		});
		this.game();
	}

	  public startTimer(): void {
		this.game();
		const timer$: Observable<number> = interval(this.sec);
		const takeThirty: Observable<number> = timer$.pipe(take(this.timeRound));
		takeThirty.subscribe( (x: number) => {
			this.count = this.timeRound - x;
			if (this.count <= 1) {
				this.gameStarted = 'complete';
			}
		});
		const sub: Subscription = timer$.subscribe((sec: number) => {
		  this.valueProgressSpinner = 100 - sec * 100 / this.timeRound;
		  this.curSec = sec;
		  if (this.curSec === this.timeRound) {
			sub.unsubscribe();
		  }
		});
	  }

/*  public ngOnInit(): void {
} */
}
