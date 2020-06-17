import { Component, OnInit } from '@angular/core';
import { DataGameService } from '../game/service/data-game.service';
import { Observable, Subscription } from 'rxjs';
import { Word } from '../game/word.model';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
public dictionaryFirst: Word[] = [];
public dictionary: Subscription = this.dataGameService.loadWordList().subscribe((items: Word[]) => items);
//public dictionaryObs: Observable<Word> = this.dataGameService.loadWordList();
  constructor(public dataGameService: DataGameService) { }

  public ngOnInit(): void {
 this.dataGameService.loadWordList().subscribe((items: Word[]) => console.log( items));
 this.dataGameService.loadWordList().subscribe(data => this.dictionaryFirst = data);
  }

}
