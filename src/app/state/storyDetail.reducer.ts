import { Result } from "../shared/models/TopsSorties";
import * as StoryDetailActions from '../state/actions/storyDetail.action';

export function reducer(state: Result[] = [], action: StoryDetailActions.Actions) {
    switch(action.type) {
        case StoryDetailActions.STORY_DeTAIL:
            return [...state, action.payload];
        default:
            return state;
    }
}
