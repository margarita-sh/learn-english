import { Injectable } from '@angular/core';
import { Word } from '../word.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataGameService {

	private static wordsforLearningLSKey: string = 'wordsforLearning';
	public wordsForLearning: Word[] = null;

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

	constructor(private _httpClient: HttpClient) { }

	public getRandomWord(): Word {
		const rand: number = Math.floor(Math.random() * this.words.length);
		const randWord: Word = this.words[rand];
		return randWord;
	}

	public getWordsForLearning(data: Word[]): void {
		this.wordsForLearning = data;
		console.log('this.getWordsForLearning', this.wordsForLearning);
	}

	public loadWordList(): Observable<Word[]> {
		if (localStorage.getItem(DataGameService.wordsforLearningLSKey)) {
		  const wordsStorageString: any = localStorage.getItem(DataGameService.wordsforLearningLSKey);
		  const wordsStorage: any = JSON.parse(wordsStorageString); // массив объеков ru-eng;
		/* return wordsStorage;  */
		return of(wordsStorage).pipe(
		map((items: Word[]) => items.map((item: Word) => item))
		  );
		}
		  return of([]);
	  }

	public save(): void {
		const dataForLocalStorage: any = JSON.stringify(this.wordsForLearning);
		console.log('dataForLocalStorage', dataForLocalStorage);
		localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalStorage);
	  }
}
