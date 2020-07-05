import { Injectable } from '@angular/core';
import { Profile } from '../profile.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ProfileService {

	private static profileKeyLS: string = 'profileKeyLS';
	public baseURL: string = './assets/avatars.json';
	public avatars: Profile[] = [];
	public nicknameRival: any = ['Саша', 'Женя', 'Знаток', 'Учитель'];
	constructor(private _http: HttpClient) { }
	public loadAvatarHttp(): Observable<Profile[]> {
		/* this._http.get<Profile[]>(this.baseURL).subscribe((items: Profile[]) => this.avatars = items); */
		return this._http.get<Profile[]>(this.baseURL).pipe(
			map((items: Profile[]) => {
				this.avatars = items;

				return items;
			})
		);
	}
	public saveProfile(userName: string, idAvatar: number): void {
		const dataUser: Profile = {
			nickname: userName,
			id: idAvatar
		};
		const dataUserLS: string = JSON.stringify(dataUser);
		localStorage.setItem(ProfileService.profileKeyLS, dataUserLS);
	}

	public getProfileFromLS(): Profile {
		const gettingDataFromLocalStorage: any = localStorage.getItem(ProfileService.profileKeyLS);
		if (gettingDataFromLocalStorage) {
			const datafromStorage: Profile = JSON.parse(gettingDataFromLocalStorage);
			const foundElement: Profile = this.avatars.find((data: Profile) => data.id === datafromStorage.id);
			datafromStorage.src = foundElement.src;
			return datafromStorage;
		}

		return new Profile();
	}

	public getRandomUser(): Profile {
		const rand: number = Math.floor(Math.random() * this.avatars.length);
		const randNickname: number = Math.floor(Math.random() * this.nicknameRival.length);
		const profile: Profile = new Profile();
		profile.src = this.avatars[rand].src;
		profile.nickname = this.nicknameRival[randNickname];
		return profile;
	}
}
