import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription, of, pipe } from 'rxjs';
import { interval } from 'rxjs';
import { take, timeout, delay } from 'rxjs/operators';
import { Word } from './game.model';

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

 	public timer(): void {
		this.game();
		const timeRound: number = 30;
		const intervalCount: Observable<number> = interval(this.sec);
		const takeThirty: Observable<number> = intervalCount.pipe(take(timeRound));
		takeThirty.subscribe( (x: number) => {
			this.count = timeRound - x;
			if (this.count <= 1) {
				this.gameStarted = 'complete';
			}
		});
	}

	public numberCorrectAnswers(): void {

	}
/*  public ngOnInit(): void {
} */
}
