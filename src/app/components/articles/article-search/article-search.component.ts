import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doc, Responses } from 'src/app/shared/models/ArticlSearch';
import { AppService } from 'src/app/shared/services/App/app.service';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent implements OnInit {

  article: Doc[]
  isLoading: boolean = false;
  baseImageUrl: string = "https://static01.nyt.com/";
  totalCount: number = 10;
  pageSize: number = 6;
  pageNumber: number = 1;
  /* Forms */
  articleFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private appService: AppService) { }

  ngOnInit(): void {
    this.initForm();
    this.getArticals();
  }

  initForm() {
    // Construct article form
    this.articleFormGroup = this.formBuilder.group({
      searchCtrl: [null],
    });
    this.handleChange();
  }

  // Form conrols
  get f() {
    return this.articleFormGroup.controls;
  }

  // Handle form changes
  handleChange() {
    this.f['searchCtrl'].valueChanges.subscribe((searchKey) => {
      this.isLoading = true;
      setTimeout(() => (this.isLoading = false), 1000);
      this.article = this.appService.getFilteredArticle(searchKey)
    })
  }

  // get all article
  getArticals() {
    this.isLoading = true;
    this.appService.articleSearch().subscribe({
      next: (res) => {
        this.appService.setArticles(res.response.docs)
        this.article = res.response.docs;
        this.isLoading = false
      },
      error: (error) => {
        this.isLoading = false
      }
    });
  }

  // pagination change
  pageChanged(selectedPage: number, isPageNumberChanged: boolean) {
    this.isLoading = true;
    isPageNumberChanged ? this.pageNumber = selectedPage : this.pageSize = selectedPage;
    if (this.pageSize == 0) {
      this.pageSize = this.totalCount;
    }
    this.getArticals();
  }

}
