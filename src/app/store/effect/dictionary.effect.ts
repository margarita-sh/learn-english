import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { mergeMap, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TypedAction } from '@ngrx/store/src/models';
import { DataGameService } from 'src/app/components/game/service/data-game.service';
import { getWordsFromLS, setWordsFromLS, removeWordFromDictionary, CustomAction, setAudioSrc, getAudioSrc } from '../action/dictionary.action';
import { Word } from 'src/app/components/game/word.model';
import { AudioService } from 'src/app/components/game/service/audio.service';

@Injectable()
export class DictionaryEffects {
	public getWordsFromLS$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getWordsFromLS),
			mergeMap(() => this.dataGameService.loadWordList()
				.pipe(
					map((dictionary: Word[]) => {
						return setWordsFromLS({ dictionary });
					})
					/* 	catchError(() => of({ type: '[Todo] Todos Loaded Error' })) */
				)
			)
		)
	);

	public removeWord$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(removeWordFromDictionary),
			mergeMap((action: CustomAction) => this.dataGameService.removeWordFromDictionary(action.word)
				.pipe(
					map((dictionary: Word[]) => {
						return setWordsFromLS({ dictionary });
					})
				)
			)
		)
	);

	public playAudio$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(getAudioSrc),
			mergeMap((action: CustomAction) => this.audioService.getAudio(action.word.englishWord)
				.pipe(
					map((data: any) => {
						return setAudioSrc({ word: action.word, src: data.location });
					})
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private dataGameService: DataGameService,
		private audioService: AudioService
	) { }
}
