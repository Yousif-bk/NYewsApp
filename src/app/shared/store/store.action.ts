import { Action } from '@ngrx/store';
import { Result } from '../models/TopsSorties';

export const ADD_Detail = 'ADD Detail';

export class AddDemo implements Action {
    readonly type = ADD_Detail;

    constructor(public payload: Result) {}
}
export type Actions = AddDemo;
