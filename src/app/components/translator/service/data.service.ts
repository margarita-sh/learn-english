import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
	public text: string;
	public sourceLanguage: number = 1049;
	public targetLanguage: number = 1033;
	public urlAPI: string = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=';
	public mainAPIKey: string = 'dict.1.1.20200609T214032Z.bb7f13f95e75ccf2.de79d0d2a909a5510ae3147dde13ba2f0d3f1dd8';

	constructor(private _http: HttpClient) { }
    
	public authenticate(): Observable<object> {
		const url=`${this.urlAPI}${this.mainAPIKey}&lang=en-ru&text=delay`;
		console.log(url);
		
		return this._http.post(url, null).pipe(
			map((items: object) => {
				let translations=[];
				//items.def[0].tr[0].text;
				items.def[0].tr.forEach(item=>translations.push(item.text));
				return {
					translations
				};
			}));
	}
}

/* .pipe(
    map(items => items.map(item => new Todo(item)))
  ); */
