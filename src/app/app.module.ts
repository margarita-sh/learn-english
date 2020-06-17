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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { DataGameService } from './components/game/service/data-game.service';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		GameComponent,
		TranslatorComponent,
		DictionaryComponent,
		AboutMeComponent,
		HomeComponent,
		NotFoundComponent
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
	 	MatProgressSpinnerModule
	],
	providers: [DataService, DataGameService],
	bootstrap: [AppComponent]
})
export class AppModule { }
