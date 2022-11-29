import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { Result } from '../models/TopsSorties';
import { storyDetails } from './news-state-store';
import * as DetailActions from '../store/store.action';

export const storeReducer = createReducer(
  on(storyDetails, (entries, product) => {
    const entriesClone: Result[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),
)

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
};


const initialState: Result[] = []

export function reducer(state: Result[] = [], action: DetailActions.Actions) {
  switch(action.type) {
      case DetailActions.ADD_Detail:
          return [...state, action.payload];
      default:
          return state;
  }
}
