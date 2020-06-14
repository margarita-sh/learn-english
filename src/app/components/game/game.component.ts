import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { take, timeout } from 'rxjs/operators';
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
	public arrayAnswers: string[] = [];
/* 	public outputResult: string = ''; */
	public sec: number = 1000;
	public outputResult: string = null;

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
		const randomRuWordFirst: Word = this.getRandomWord();
		const randomRuWordSecond: Word = this.getRandomWord();
		this.arrayAnswers.push(this.word.russianWord, randomRuWordFirst.russianWord, randomRuWordSecond.russianWord);
	}

	public checkAnswer(answer: string): void {
		if (answer === this.word.russianWord) {
			this.outputResult = 'ок';
		} else {
			this.outputResult = 'неок';
		}
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

/*  public ngOnInit(): void {
} */
}
