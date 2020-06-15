import { Injectable } from '@angular/core';
import { Word } from '../game.model';

@Injectable()
export class DataGameService {

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
}
