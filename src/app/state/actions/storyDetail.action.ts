import { Action } from '@ngrx/store';
import { Result } from 'src/app/shared/models/TopsSorties';

export const STORY_DeTAIL = 'Story Detail';
export const SEARCH_HESTORY = 'Story Detail';

export class StoryDetail implements Action {
    readonly type = STORY_DeTAIL;
    constructor(public payload: Result) {}
}
export class SearchHistory implements Action {
  readonly type = SEARCH_HESTORY;

  constructor(public payload: number) {}
}


export type Actions = StoryDetail | SearchHistory
