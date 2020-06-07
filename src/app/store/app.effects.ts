/* import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { ITodosState } from './todos.state';
import { TodoDataService } from 'src/app/_services/todo-data.service';
import { mergeMap, map, catchError, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { getTodos, setTodos, saveTodos, loadFromAssets } from './todos.actions';
import { selectTodos } from './todos.selectors';

@Injectable()
export class EffectsTodo {
    getTodos$ = createEffect(
        () => this.actions$.pipe(
            ofType(getTodos),
            mergeMap(() => this._todoDataService.loadTodoList()
                .pipe(
                    map(todos => {
                        return setTodos({ todos });
                    }),
                    catchError(() => of({ type: '[Todo] Todos Loaded Error' }))
                )
            )
        )
    );

    saveTodos$ = createEffect(
        () => this.actions$.pipe(
            ofType(saveTodos),
            mergeMap(() => this._store$.pipe(select(selectTodos),take(1))
                .pipe(
                    map(todos => {
                        this._todoDataService.save(todos);
                        return setTodos({ todos });
                    })
                )
            )
        )
    );

    loadFromAssets$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadFromAssets),
            mergeMap(() => this._todoDataService.loadFromAssets()
                .pipe(
                    map(todos => {
                        this._todoDataService.save(todos);
                        return setTodos({ todos });
                    })
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private _store$: Store<ITodosState>,
        private _todoDataService: TodoDataService,
    ) { }

}  */

import { Injectable } from '@angular/core';
import {Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class AppEffects {
 constructor (private actions$: Actions) {
 }

}
