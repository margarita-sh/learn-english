import { APIYandex } from './modelAPIYandex';

export class FullTranslation {
	public translate: string[];
	public transcription: string;
	public example: string[];

	public parseTranslation(data: APIYandex.RootObject): any {
		console.log(data);
		this.translate = data.def[0].tr.map((item: APIYandex.Tr) => item.text);
		 this.transcription = data.def[0].ts;
		/* this.example = data.def[0].tr.map((item: APIYandex.Tr) => item.ex.map((items: APIYandex.Ex) => items.text)); */
		/* this.example = data.def[0].tr.map((items: APIYandex.Tr) => items.ex.map((item: APIYandex.Ex) => item.tr[0].text)); */
		console.log('this.translate', this);
	}
}
