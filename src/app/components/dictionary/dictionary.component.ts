import { Component, OnInit } from '@angular/core';
import { DataGameService } from '../game/service/data-game.service';
import { Word } from '../game/word.model';
import { AudioService } from '../game/service/audio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
public dictionary: Word[] = [];


  constructor(public dataGameService: DataGameService, public audioService: AudioService) { }

  public ngOnInit(): void {
 this.dataGameService.loadWordList().subscribe((data: Word[]) => this.dictionary = data);
  }

  public removeWordFromDictionary(word: Word): void {
	this.dictionary = this.dictionary.filter((item: Word) => item.id !== word.id);
	this.dataGameService.save(this.dictionary);
	}

/* 	public pronunciation: Subscription = this.audioService.getAudio(this.word).subscribe((data: any) => {
		return data.subscribe(data => data.location); */

}
