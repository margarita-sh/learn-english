import { Component, OnInit } from '@angular/core';
import { CountState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectUpdatedAt } from '../../store/selectors/count.selectors';
import { increase, decrease, clear } from '../../store/action/app.actions';
import { map } from 'rxjs/operators';
import { DataService } from '../translator/service/data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  public count$: Observable<number> = this._store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this._store$.pipe(select(selectUpdatedAt));
  public disableDecrease$: Observable<boolean> = this.count$.pipe(map((count: number) => count <= 0));

  constructor(public _store$: Store<CountState>) {
  }

  public increaseCount(): void {
  this._store$.dispatch(increase({}));
  }

  public decreaseCount(): void {
  this._store$.dispatch(decrease({}));
  }

  public clearCount(): void {
  this._store$.dispatch(clear({}));
  }

}
