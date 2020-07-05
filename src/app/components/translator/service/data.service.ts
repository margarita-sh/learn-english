import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIYandex } from '../apiYandex.model';
import { FullTranslation } from '../fullTranslator.model';

@Injectable()
export class DataService {
	// public sourceLanguage: string[] = ['ru-ru', 'ru-en', 'ru-pl', 'ru-de', 'ru-fr', 'ru-es', 'ru-it'];
	public urlAPI: string = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=';
	public mainAPIKey: string = 'dict.1.1.20200609T214032Z.bb7f13f95e75ccf2.de79d0d2a909a5510ae3147dde13ba2f0d3f1dd8';
	public langRU: string = 'ru-en';
	public langEN: string = 'en-ru';

	constructor(private _http: HttpClient) { }

	public translateWord(data: string, lang: string): Observable<FullTranslation> {
		const url: string = `${this.urlAPI}${this.mainAPIKey}&lang=${lang}&text=${data}`;
		return this._http.post(url, null).pipe(
			map((items: APIYandex.RootObject) => {
				const translation: FullTranslation = new FullTranslation();
				translation.parseTranslation(items);
				return translation;
			}));
	}
}
