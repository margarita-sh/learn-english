import { Component, OnInit } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { Word } from './word.model';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DataGameService } from './service/data-game.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../profile/service/profile.service';
import { Profile } from '../profile/profile.model';
import { getWordsFromLS } from 'src/app/store/action/dictionary.action';
import { Store, select } from '@ngrx/store';
import { DictionaryState } from 'src/app/store/state/dictionary.state';
import { setGameStatus, getNewQuestion } from 'src/app/store/action/game.action';
import { selectStatusGame, selectWord, selectAnswers } from 'src/app/store/selectors/game.selectors';
import { getRivalProfile, getProfileUserFromLS } from 'src/app/store/action/profile.actions';
import { selectRivalProfile, selectUserProfile } from 'src/app/store/selectors/profile.selectors';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
	public gameStatus$: Observable<string> = this._store$.pipe(select(selectStatusGame));
	public word$: Observable<Word> = this._store$.pipe(select(selectWord));
	public answers$: Observable<string[]> = this._store$.pipe(select(selectAnswers));
	public randomRival$: Observable<Profile> = this._store$.pipe(select(selectRivalProfile));
	public User$: Observable<Profile> = this._store$.pipe(select(selectUserProfile));

	public count: number = null;
	public sec: number = 1000;
	public resultDuration: number = 200;
	public correctAnswer: number = 0;
	public wrongAnswer: number = 0;
	public timeRound: number = 30;
	public arrayForDictionary: Word[] = [];
	public color: object = {};
	public selectedAnswer: string = '';
	public allAnswerRival: number = 30;
	public correctAnswerRival: number = 0;
	public wrongAnserRival: number = 0;
	public resultAllGame: string = null;

	public mode: ProgressSpinnerMode = 'determinate';
	public valueProgressSpinner: number;
	public showText: number = this.count;
	public strokeWidth: number = 15;
	public diameter: number = 120;

	constructor(public dataGameService: DataGameService, private router: Router, public translate: TranslateService,
		public profileService: ProfileService, private _store$: Store<DictionaryState>) {
		translate.addLangs(['en', 'ru']);
		translate.setDefaultLang('en');
		const browserLang: any = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
	}

	public ngOnInit(): void {
		this.profileService.loadAvatarHttp().subscribe(() => {
			this._store$.dispatch(getProfileUserFromLS({}));
			this._store$.dispatch(getRivalProfile({}));
			if (typeof this.profileService.getProfileFromLS().id === 'number') {
				this._store$.dispatch(setGameStatus({ gameStatus: 'start' }));
			} else {
				this._store$.dispatch(setGameStatus({ gameStatus: 'profile' }));
			}
		});
	}

	public game(): void {
		this._store$.dispatch(setGameStatus({ gameStatus: 'game' }));
		this._store$.dispatch(getNewQuestion({}));
	}

	public checkAnswer(answer: string, index: number): void {
		this.word$.pipe(take(1))
			.subscribe((word: Word) => {
				if (answer === word.russianWord) {
					this.selectedAnswer = 'true';
					this.correctAnswer++;
					this.color = {
						[index]: {
							background: 'green'
						}
					};
				} else {
					this.selectedAnswer = 'false';
					this.wrongAnswer++;
					this.arrayForDictionary.push(word);
					this.color = {
						[index]: {
							background: 'red'
						}
					};
				}
				of(this.color).pipe(delay(this.resultDuration)).subscribe(() => {
					this.color = {};
					this.selectedAnswer = '';
				});
				this.game();
			});
	}

	public startTimer(): void {
		this.correctAnswer = 0;
		this.wrongAnswer = 0;
		this.correctAnswerRival = 0;
		this.wrongAnserRival = 0;
		this.game();
		this.count = this.timeRound;
		const newLocal_1: number = 100;
		this.valueProgressSpinner = newLocal_1;
		interval(this.sec)
			.pipe(
				take(this.timeRound)
			)
			.subscribe((count: number) => {
				count = this.timeRound - (count + 1);
				this.count = count;
				const valueSpinner: number = 100;
				this.valueProgressSpinner = valueSpinner / this.timeRound * count;
				if (this.count <= 0) {
					this._store$.dispatch(setGameStatus({ gameStatus: 'complete' }));
					this.count = null;
					this.resultGameRival();
					this.resultGame();
					this.dataGameService.addWordsDictionary(this.arrayForDictionary);
					this._store$.dispatch(getWordsFromLS({}));
				}
			});
	}

	public goToDictionary(pageName: string): void {
		this.router.navigate([`${pageName}`]);
	}

	public onSaved(): void {
		this._store$.dispatch(setGameStatus({ gameStatus: 'start' }));
		this._store$.dispatch(getProfileUserFromLS({}));
	}

	public resultGameRival(): void {
		const minAnswerRival: number = 15;
		this.correctAnswerRival = Math.floor(Math.random() * (this.allAnswerRival - minAnswerRival) + minAnswerRival);
		this.wrongAnserRival = this.allAnswerRival - this.correctAnswerRival;
	}

	public resultGame(): void {
		const totalPoints: number = this.correctAnswer - this.wrongAnswer * 2;
		const totalPointRival: number = this.correctAnswerRival - this.wrongAnserRival * 2;
		if (totalPoints > totalPointRival) {
			this.resultAllGame = 'GAME.RESULT_WIN';
		} else if (totalPoints < totalPointRival) {
			this.resultAllGame = 'GAME.RESULT_FAIL';
		} else {
			this.resultAllGame = 'GAME.RESULT_DRAW';
		}
	}

}
