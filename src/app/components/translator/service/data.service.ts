import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIYandex } from '../apiYandex.model';
import { FullTranslation } from '../fullTranslator.model';

@Injectable()
export class DataService {
	public sourceLanguage: string[] = ['ru-ru', 'ru-en', 'ru-pl', 'ru-uk', 'ru-de', 'ru-fr', 'ru-es', 'ru-it', 'ru-tr', 'en-ru', 'en-en', 'en-de', 'en-fr', 'en-es', 'en-tr', 'pl-ru', 'uk-ru', 'de-ru', 'de-en', 'fr-ru', 'fr-en', 'es-ru', 'es-en', 'it-ru', 'it-en', 'tr-ru', 'tr-en'];
	public urlAPI: string = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=';
	public mainAPIKey: string = 'dict.1.1.20200609T214032Z.bb7f13f95e75ccf2.de79d0d2a909a5510ae3147dde13ba2f0d3f1dd8';

	constructor(private _http: HttpClient) { }

	public translateWord(data: string): Observable<FullTranslation> {
		const url: string = `${this.urlAPI}${this.mainAPIKey}&lang=ru-en&text=${data}`;
		// console.log(url);
		return this._http.post(url, null).pipe(
			map((items: APIYandex.RootObject) => {
				console.log(items);
				const translation: FullTranslation = new FullTranslation();
				translation.parseTranslation(items);
				return translation;
			}));
	}
}
