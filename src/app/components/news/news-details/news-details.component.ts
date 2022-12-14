import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Result } from 'src/app/shared/models/TopsSorties';
import { AppService } from 'src/app/shared/services/App/app.service';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  result$: Observable<Result[]>;
  result: Result;
  sub: Subscription;
  /**
   * get Story from Store
   * @param store
   */
  constructor(private store: Store<any>) {
    this.result$ = store.select("storyDetail");
  }



  ngOnInit(): void { }

}
