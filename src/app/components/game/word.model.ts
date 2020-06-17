export class Word {
	// public id: number;
	public russianWord: string;
	public englishWord: string;

	constructor(russianWord: string, englishWord: string, id: number) {
		this.russianWord = russianWord;
		this.englishWord = englishWord;
		// this.id = id;
	}
}
