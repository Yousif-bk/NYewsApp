import { Action } from '@ngrx/store';
import { Result } from 'src/app/shared/models/TopsSorties';

export const STORY_DeTAIL = 'Story Detail';

export class StoryDetail implements Action {
    readonly type = STORY_DeTAIL;
    constructor(public payload: Result) {}
}


export type Actions = StoryDetail;
