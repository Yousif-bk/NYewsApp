import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Result, TopsSorties } from 'src/app/shared/models/TopsSorties';
import { AppService } from 'src/app/shared/services/App/app.service';
import { AppState } from 'src/app/state/app.state';
import * as StoryDetailActions from '../../../state/actions/storyDetail.action';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  topsSorties: TopsSorties[];
  result: Result[];
  constructor(private appService: AppService,
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    this.getTopStories();
  }

  // APIs Call
  getTopStories() {
    this.appService.getTopStories().subscribe({
      next: (res) => {
        this.result = res.results;
      },
    });
  }

  setSelectedStory(results: Result){
    // this.store.dispatch(new StoryDetailActions.STORY_DeTAIL(results))
  }
}
