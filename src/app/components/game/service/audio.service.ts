import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Word } from '../word.model';

@Injectable()
export class AudioService {
	public urlAPI: string = 'https://api.soundoftext.com/sounds';

	constructor(private _http: HttpClient) { }

	public getAudio(word: Word): Observable<any> {
		return this._http.post(this.urlAPI, JSON.stringify({ engine: 'Google', data: { text: word.englishWord, voice: 'en-US' } }),
			{ headers: { 'Content-Type': 'application/json' } })
			.pipe(
				map((items: any) => {
					return this._http.get('https://api.soundoftext.com/sounds/' + items.id);
				})
			);
			/* .subscribe( (data: any) => {
				return data.subscribe(data => data.location);
			}); */
	}

}
