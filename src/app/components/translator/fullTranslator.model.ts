import { APIYandex } from './modelAPIYandex';

export class FullTranslation {
	public translate: string[];
	public transcription: string;

	public parseTranslation(data: APIYandex.RootObject): void {
		this.translate = data.def[0].tr.map((item: APIYandex.Tr) => item.text);
		console.log('this.translate', this.translate);

	}
}
