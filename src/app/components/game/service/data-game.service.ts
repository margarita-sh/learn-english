import { Injectable } from '@angular/core';
import { Word } from '../word.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataGameService {

	private static wordsforLearningLSKey: string = 'wordsforLearning';
	public url: string = './assets/words.json';
	public words: Word[] = [];
	public numberOptionsAnswer: number = 3;

	constructor(private _httpClient: HttpClient) { }
	
	public getRandomWord(): Word {
		const rand: number = Math.floor(Math.random() * this.words.length);
		const randWord: Word = this.words[rand];
		return randWord;
	}

	public loadWordList(): Observable<Word[]> {
		const gettingDataFromLocalStorage: any = localStorage.getItem(DataGameService.wordsforLearningLSKey);
		if (gettingDataFromLocalStorage) {
			const wordsStorageString: any = gettingDataFromLocalStorage;
			const wordsStorage: Word[] = JSON.parse(wordsStorageString);
			return of(wordsStorage);
		}
		return of([]);
	}

	public save(words: Word[]): void {
		const dataForLocalSrorageString: string = JSON.stringify(words);
		localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalSrorageString);
	}

	public addWordsDictionary(words: Word[]): void {
		const gettingDataFromLocalStorage: any = localStorage.getItem(DataGameService.wordsforLearningLSKey);
		if (gettingDataFromLocalStorage) {
			const wordsStorageString: any = gettingDataFromLocalStorage;
			const wordsStorage: Word[] = JSON.parse(wordsStorageString);
			words = words.filter( (value: Word) => {
				// tslint:disable-next-line: typedef
				const result = wordsStorage.find((data) => {
					return data.id === value.id;
				});
				if (result) {
					return false;
				} else {
					return true;
				}
			});
			const dataForLocalSrorageConcat: Word[] = wordsStorage.concat(words);
			const dataForLocalSrorageString: string = JSON.stringify(dataForLocalSrorageConcat);
			localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalSrorageString);
		} else {
			const dataForLocalStorage: string = JSON.stringify(words);
			localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalStorage);
		}
	}

	public removeWordFromDictionary(word: Word): Observable<any> {
		return this.loadWordList().
			pipe(
				map((items: Word[]) => {
					items = items.filter((item: Word) => item.id !== word.id);
					this.save(items);

					return items;
				})
			);
	}

	public loadWordsHttp(): void {
		this._httpClient.get<Word[]>(this.url).subscribe((items: Word[]) => this.words = items);
	}

	public getRandomAnswers(word: Word): string[] {
		const wordsForArrayAnswer: Set<string> = new Set();
		wordsForArrayAnswer.add(word.russianWord);
		while (wordsForArrayAnswer.size < this.numberOptionsAnswer) {
			const randomRuWord: Word = this.getRandomWord();
			wordsForArrayAnswer.add(randomRuWord.russianWord);
		}
		const newLocal: number = 0.5;
		return Array.from(wordsForArrayAnswer).sort(() => Math.random() - newLocal);
	}
}
