import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Result } from 'src/app/shared/models/TopsSorties';
import { AppState } from 'src/app/shared/store/AppState';
import { storyDetails } from 'src/app/shared/store/news-state-store';
import { ResultGroup, selectGroupedCartEntries } from 'src/app/shared/store/newsselectors';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  // storyDetails$: Observable<ResultGroup[]>;
  // constructor(private store: Store) {
  //   this.storyDetails$ = store.select(selectGroupedCartEntries)
  //  }

  demo$: Observable<Result[]>;

  constructor(private store: Store<AppState>) {
    this.demo$ = store.select("demoStore");
    console.log()
  }

  ngOnInit(): void {
  }

}
