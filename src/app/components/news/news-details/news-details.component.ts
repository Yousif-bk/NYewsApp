import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Result } from 'src/app/shared/models/TopsSorties';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  result$: Observable<Result[]>;
  result: Result[];
  abstract: ""
  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {

  }

}
