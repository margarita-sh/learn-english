import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { updatedAt, increase, decrease, clear } from '../action/app.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class AppEffects {

	public updatedAt$: Observable<TypedAction<string>> = createEffect(
		() => this.actions$.pipe(
			ofType(increase, decrease, clear),
			map(() => {
				return updatedAt({ payload: Date.now() });
			}
			)
		)
	);

	constructor(private actions$: Actions) {
	}
}
