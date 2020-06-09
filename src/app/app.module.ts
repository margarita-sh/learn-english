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
import { AppEffects } from './store/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { WordComponent } from './word/word.component';
import { TranslatorComponent } from './components/translator/translator.component';

@NgModule({
	declarations: [
		AppComponent,
		GameComponent,
		WordComponent,
		TranslatorComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		StoreModule.forRoot(reducer),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([AppEffects]),
		StoreRouterConnectingModule.forRoot()
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
