import { Component, OnInit} from '@angular/core';
import { DataGameService } from '../game/service/data-game.service';
import { Word } from '../game/word.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	public dictionary: Word[] = [];
	public numberWordsInDictionary: number = null;

	constructor(public dataGameService: DataGameService) {
	}
	public ngOnInit(): void {
		this.dataGameService.loadWordList().subscribe((data: Word[]) => this.dictionary = data);
		 this.numberWordsInDictionary = this.dictionary.length;
		 console.log('из меню', this.numberWordsInDictionary);
	}
}
