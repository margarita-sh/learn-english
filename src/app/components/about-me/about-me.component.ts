import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(private translate: TranslateService) {
	translate.addLangs(['en', 'ru']);
	translate.setDefaultLang('en');
	const browserLang: any = translate.getBrowserLang();
	translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

}
