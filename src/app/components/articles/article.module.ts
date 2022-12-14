import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/shared/models/AppRoutes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: AppRoutes.article.sub,
    component: ArticleSearchComponent,
  }
]

@NgModule({
  declarations: [
    ArticleSearchComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticleModule { }
