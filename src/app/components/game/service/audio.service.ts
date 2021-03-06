import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Word } from '../word.model';

@Injectable()
export class AudioService {
	public urlAPI: string = 'https://api.soundoftext.com/sounds';
	constructor(private _http: HttpClient) {
	}

	public getAudio(word: string): Observable<any> {
		return this._http.post(this.urlAPI, JSON.stringify({ engine: 'Google', data: { text: word, voice: 'en-US' } }),
			{ headers: { 'Content-Type': 'application/json' } })
			.pipe(
				mergeMap((items: any) => {
					return this._http.get('https://api.soundoftext.com/sounds/' + items.id);
				})
			);
	}

}
