import { Component} from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	public nickname: string = null;
	public idAvatar: number = null;

	public avatars: any = [
		{
			id: 1,
			src:"./assets/avatar/1.svg",
		},
		{
			id: 2,
			src:"./assets/avatar/2.svg",
		},
		{
			id: 3,
			src:"./assets/avatar/3.svg",
		},
		{
			id: 4,
			src:"./assets/avatar/4.svg",
		},
		{
			id: 5,
			src:"./assets/avatar/5.svg",
		},
		{
			id: 6,
			src:"./assets/avatar/6.svg",
		},
		{
			id: 7,
			src:"./assets/avatar/7.svg",
		},
		{
			id: 8,
			src:"./assets/avatar/8.svg",
		},
		{
			id: 9,
			src:"./assets/avatar/9.svg",
		},
		{
			id: 10,
			src:"./assets/avatar/10.svg",
		}
	];

	public getDataFromProfile(data: string, id: number): void {
		this.idAvatar = id;
		console.log('datafromUser', data, this.idAvatar);
	}
	public getIdAvatar(data: number) {
		this.idAvatar = data;
	}


/* 	public selectAvatar(event) {
		console.log(event.target.src);
	} */
}
