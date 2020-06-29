import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { DataService } from './components/translator/service/data.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { reducer } from './store';
import { AppEffects } from './store/effect/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { TranslatorComponent } from './components/translator/translator.component';
import { TranslateEffects } from './store/effect/translate.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { DataGameService } from './components/game/service/data-game.service';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AudioService } from './components/game/service/audio.service';
import { MenuComponent } from './components/menu/menu.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationService } from './components/locale/missing-translation.service.ts';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { ProfileComponent } from './components/profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { ProfileService } from './components/profile/service/profile.service';
import {MatTableModule} from '@angular/material/table';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
	return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		GameComponent,
		TranslatorComponent,
		DictionaryComponent,
		AboutMeComponent,
		HomeComponent,
		NotFoundComponent,
		MenuComponent,
		ProfileComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		StoreModule.forRoot(reducer),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([AppEffects, TranslateEffects]),
		StoreRouterConnectingModule.forRoot(),
		BrowserAnimationsModule,
		MatProgressSpinnerModule,
		MatInputModule,
		MatIconModule,
		MatBadgeModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			},
			missingTranslationHandler: {
				provide: MissingTranslationHandler,
				useClass: MissingTranslationService,
			},
			defaultLanguage: 'ru',
		}),
		MatProgressButtonsModule,
		MatButtonToggleModule,
		MatButtonModule,
		MatTableModule,
	],
	providers: [DataService, DataGameService, AudioService, ProfileService],
	bootstrap: [AppComponent]
})
export class AppModule { }
