import { createAction, props } from '@ngrx/store';
import { Result } from '../models/TopsSorties';

export const storyDetails = createAction('story details', props<Result>());
