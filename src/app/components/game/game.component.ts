import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { Word } from './word.model';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DataGameService } from './service/data-game.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../profile/service/profile.service';
import { Profile } from '../profile/profile.model';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
	public word: Word = null;
	public gameStarted: string = 'profile';
	public count: number = null;
	public arrayAnswers: string[] = null;
	public sec: number = 1000;
	public resultDuration: number = 200;
	public numberOptionsAnswer: number = 3;
	public correctAnswer: number = null;
	public wrongAnswer: number = null;
	public timeRound: number = 30;
	public arrayForDictionary: Word[] = [];
	public color: object = {};
	public selectedAnswer: string = '';
	public dataUser: Profile = this.profileService.getProfileFromLS();
	public randomUser: Profile;


	public mode: ProgressSpinnerMode = 'determinate';
	public valueProgressSpinner: number;
	public showText: number = this.count;
	public strokeWidth: number = 15;
	public diameter: number = 120;

	constructor(public dataGameService: DataGameService, private router: Router, public translate: TranslateService,
		public profileService: ProfileService) {
		translate.addLangs(['en', 'ru']);
		translate.setDefaultLang('en');
		const browserLang: any = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
	}

	public ngOnInit(): void {
		this.generateRandomUser();

		if (this.profileService.getProfileFromLS()) {
			this.gameStarted = 'start';
		} else {
			this.gameStarted = 'profile';
		}

	}

	public game(): void {
		this.gameStarted = 'game';
		this.arrayAnswers = [];
		this.word = this.dataGameService.getRandomWord();
		const wordsForArrayAnswer: Set<string> = new Set();
		wordsForArrayAnswer.add(this.word.russianWord);
		while (wordsForArrayAnswer.size < this.numberOptionsAnswer) {
			const randomRuWord: Word = this.dataGameService.getRandomWord();
			wordsForArrayAnswer.add(randomRuWord.russianWord);
		}
		const newLocal: number = 0.5;
		this.arrayAnswers = Array.from(wordsForArrayAnswer).sort(() => Math.random() - newLocal);
	}

	public checkAnswer(answer: string, index: number): void {
		if (answer === this.word.russianWord) {
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
			this.arrayForDictionary.push(this.word);
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
	}

	public startTimer(): void {
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
				// tslint:disable-next-line: no-magic-numbers
				this.valueProgressSpinner = 100 / this.timeRound * count;
				if (this.count <= 0) {
					this.gameStarted = 'complete';
					this.count = null;
					this.dataGameService.addWordsDictionary(this.arrayForDictionary);
				}
			});

	}

	public goToDictionary(pageName: string): void {
		this.router.navigate([`${pageName}`]);
	}

	public onSaved(): void {
		this.gameStarted = 'start';
		this.dataUser = this.profileService.getProfileFromLS();
	}

	public generateRandomUser(): void {
		const rand: number = Math.floor(Math.random() * this.profileService.avatars.length);
		const randNickname: number = Math.floor(Math.random() * this.profileService.nicknameRival.length);
		this.randomUser = new Profile(1);
		this.randomUser.src = this.profileService.avatars[rand].src;
		this.randomUser.nickname = this.profileService.nicknameRival[randNickname];
	}
}
