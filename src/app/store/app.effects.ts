
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class AppEffects {
    constructor (private _action$: Action){}
}