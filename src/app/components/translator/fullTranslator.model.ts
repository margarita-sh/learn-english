import { APIYandex } from './apiYandex.model';

export class FullTranslation {
	public translate: string[];

	public parseTranslation(data: APIYandex.RootObject): any {
		if (data.def.length === 0) {
			throw new Error('word not found');
		}
		this.translate = data.def[0].tr.map((item: APIYandex.Tr) => item.text);
	}
}
