import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TranslatorComponent } from './components/translator/translator.component';
import { GameComponent } from './components/game/game.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'translate',
		component: TranslatorComponent,
	},
	{
		path: 'game',
		component: GameComponent,
	},
	{
		path: 'dictionary',
		component: DictionaryComponent,
	},
	{
		path: 'about-me',
		component: AboutMeComponent,
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
