import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Doc } from 'src/app/shared/models/ArticlSearch';
import { Multimedia } from 'src/app/shared/models/TopsSorties';
import { AppService } from 'src/app/shared/services/App/app.service';
import { AppState } from 'src/app/state/app.state';
import * as StoryDetailActions from '../../../state/actions/storyDetail.action';
@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent implements OnInit {

  article: Doc[]
  isLoading: boolean = false;
  baseImageUrl: string = "https://static01.nyt.com/";
  totalCount = 0
  pageSize: number = 6;
  pageNumber: number = 1;
  result$: Observable<any>;
  /* Forms */
  articleFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private appService: AppService) {

     }

  ngOnInit(): void {
    this.initForm();
    this.getArticals();
  }

  /**
   * init Form
   */
  initForm() {
    this.articleFormGroup = this.formBuilder.group({
      searchCtrl: [null],
    });
    this.handleChange();
  }

  // Form conrols
  get f() {
    return this.articleFormGroup.controls;
  }

  /**
   * Handle input change
   */
  handleChange() {
    this.f['searchCtrl'].valueChanges.subscribe((searchKey) => {
      this.isLoading = true;
      setTimeout(() => (this.isLoading = false), 1000);
      this.article = this.appService.getFilteredArticle(searchKey)
    })
  }

  /**
   * Get all article
   */
  getArticals() {
    this.isLoading = true;
    this.appService.articleSearch().subscribe({
      next: (res) => {
        this.appService.setArticles(res)
        this.article = res;
        this.totalCount = res.length
        this.isLoading = false
      },
      error: (error) => {
        this.isLoading = false
      }
    });
  }

  /**
   *
   * @param selectedPage pagination change
   * @param isPageNumberChanged
   */
  pageChanged(selectedPage: number, isPageNumberChanged: boolean) {
    this.isLoading = true;
    isPageNumberChanged ? this.pageNumber = selectedPage : this.pageSize = selectedPage;
    if (this.pageSize == 0) {
      this.pageSize = this.totalCount;
    }
    this.getArticals();
  }

}
