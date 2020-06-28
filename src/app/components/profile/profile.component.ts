import { Component, Output, EventEmitter } from '@angular/core';
import { ProfileService } from './service/profile.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	public nickname: string = null;
	public idAvatar: number = null;

	@Output() public onSaved: EventEmitter<any> = new EventEmitter();

	constructor(public profileService: ProfileService, public translate: TranslateService) {
		translate.addLangs(['en', 'ru']);
		translate.setDefaultLang('en');
		const browserLang: any = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
	}

	public getIdAvatar(data: number): void {
		this.idAvatar = data;
	}

	public save(nickname: string, idAvatar: number): void {
		this.profileService.saveProfile(nickname, idAvatar);
		this.onSaved.emit();
	}

}
