import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Word } from '../word.model';

@Injectable()
export class AudioService {
	public urlAPI: string = 'https://api.soundoftext.com/sounds';
/* 	public audio: HTMLAudioElement; */
	constructor(private _http: HttpClient) {
		/* this.audio = new Audio(); */
	}

	public getAudio(word: string): Observable<any> {
		return this._http.post(this.urlAPI, JSON.stringify({ engine: 'Google', data: { text: word, voice: 'en-US' } }),
			{ headers: { 'Content-Type': 'application/json' } })
			.pipe(
				map((items: any) => {
					console.log('items', items);
					return this._http.get('https://api.soundoftext.com/sounds/' + items.id);
				})
			)
	}


}
