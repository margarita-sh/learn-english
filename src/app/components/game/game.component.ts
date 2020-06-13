import { Component, OnInit } from '@angular/core';
import { CountState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectUpdatedAt } from '../../store/selectors/count.selectors';
import { increase, decrease, clear } from '../../store/action/app.actions';
import { map, delay } from 'rxjs/operators';
import { DataService } from '../translator/service/data.service';
import { Word } from './game.model';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
	/*  public count$: Observable<number> = this._store$.pipe(select(selectCount));
	 public updatedAt$: Observable<number> = this._store$.pipe(select(selectUpdatedAt));
	 public disableDecrease$: Observable<boolean> = this.count$.pipe(map((count: number) => count <= 0));

	 constructor(public _store$: Store<CountState>) {
	 }

	 public increaseCount(): void {
	 this._store$.dispatch(increase({}));
	 }

	 public decreaseCount(): void {
	 this._store$.dispatch(decrease({}));
	 }

	 public clearCount(): void {
	 this._store$.dispatch(clear({}));
	 } */

	public word: Word = null;

	public correctAnswer: boolean = true;
	public wrongAnswer: boolean =  false;

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
		englishWord: 'Hello',
		russianWord: 'привет'
	},
	{
		englishWord: 'dog',
		russianWord: 'собака'
	},
	];

	public arrayAnswers: string[] = [];

	public outputResult: string = '';

	public getRandomWord(): Word {
		const rand: number = Math.floor(Math.random() * this.words.length);
		const randWord: Word = this.words[rand];
		return randWord;
	}

	public ngOnInit(): void {
		this.word = this.getRandomWord();
		const randomRuWordFirst: Word = this.getRandomWord();
		const randomRuWordSecond: Word = this.getRandomWord();
		this.arrayAnswers.push(this.word.russianWord, randomRuWordFirst.russianWord, randomRuWordSecond.russianWord);
	}

	public checkAnswer(answer: string): string {
		 if ( answer === this.word.russianWord) {
			return this.outputResult = 'ок';
		 } else {
			return this.outputResult = 'неок';
		}
	}

}
