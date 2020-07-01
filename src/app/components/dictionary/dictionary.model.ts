import { Word } from '../game/word.model';

export class Dictionary {
	public word: Word;
	public src: string;

	constructor(word: Word, src: string) {
		this.word = word;
		this.src = src;
	}
}
