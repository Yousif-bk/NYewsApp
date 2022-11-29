import { Result } from "../models/TopsSorties";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ResultGroup {
  result: Result;
  count: number;
}
export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('newsEntries'),
  (state: Result[]) => {
    var map: Map<number, ResultGroup> = new Map;

    state.forEach(p => {
      if (map.get(p.section)) {
        (map.get(p.section) as ResultGroup).count++;
      } else {
        map.set(p.section, { result: p, count: 1 });
      }
    })

    const sortedMap = new Map([...map.entries()].sort());
    return Array.from(sortedMap.values());
  }
)
