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
public dictionary: Word[] = [];
  constructor(public dataGameService: DataGameService) { }

  public ngOnInit(): void {
 this.dataGameService.loadWordList().subscribe(data => this.dictionary = data);
  }

}
