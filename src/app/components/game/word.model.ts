export class Word {
	public id: string;
	public russianWord: string;
	public englishWord: string;
	public isLoading?: boolean = false;

	constructor(russianWord?: string, englishWord?: string, id?: string) {
		this.russianWord = russianWord;
		this.englishWord = englishWord;
		this.id = id;
	}
}
