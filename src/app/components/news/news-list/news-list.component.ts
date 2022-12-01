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
  isLoading = true;
  selectedCategoy: string
  constructor(private appService: AppService,
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    this.getTopStories();
  }

  // APIs Call
  getTopStories() {
    this.isLoading = true;
    this.appService.getTopStories().subscribe({
      next: (res) => {
        console.log(res)
        this.result = res.results;
        this.isLoading  = false
      },
    });
  }

  setSelectedStory(results: Result){
     this.store.dispatch(new StoryDetailActions.StoryDetail(results))
  }

  // filter Categories
  filterCategories(categoryName:string){
    this.selectedCategoy = categoryName
    this.isLoading = true;
    this.appService.getSelectedCategory(categoryName).subscribe({
      next: (res) => {
        this.result = res;
        this.isLoading  = false
      }, error: (err) =>{
        console.log(err)
      }
    });
  }
}
