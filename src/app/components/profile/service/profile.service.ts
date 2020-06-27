import { Injectable } from '@angular/core';
import { Profile } from '../profile.model';
@Injectable()
export class ProfileService {

	private static profileKeyLS: string = 'profileKeyLS';
	public avatars: Profile[] = [
		{
			id: 1,
			src: './assets/avatar/1.svg',
		},
		{
			id: 2,
			src: './assets/avatar/2.svg',
		},
		{
			id: 3,
			src: './assets/avatar/3.svg',
		},
		{
			id: 4,
			src: './assets/avatar/4.svg',
		},
		{
			id: 5,
			src: './assets/avatar/5.svg',
		},
		{
			id: 6,
			src: './assets/avatar/6.svg',
		},
		{
			id: 7,
			src: './assets/avatar/7.svg',
		},
		{
			id: 8,
			src: './assets/avatar/8.svg',
		},
		{
			id: 9,
			src: './assets/avatar/9.svg',
		},
		{
			id: 10,
			src: './assets/avatar/10.svg',
		}
	];
	public saveProfile(userName: string, idAvatar: number): void {
		const dataUser: Profile = {
			nickname: userName,
			id: idAvatar
		};
		const dataUserLS: string = JSON.stringify(dataUser);
		localStorage.setItem(ProfileService.profileKeyLS, dataUserLS);
	}

	public getProfileFromLS(): any {
		const gettingDataFromLocalStorage: any = localStorage.getItem(ProfileService.profileKeyLS);
		if (gettingDataFromLocalStorage) {
			const datafromStorage: Profile = JSON.parse(gettingDataFromLocalStorage);
			const foundElement: Profile = this.avatars.find((data: Profile) => data.id === datafromStorage.id);
			datafromStorage.src = foundElement.src;
			return datafromStorage;
		}

		return false;
	}
}
