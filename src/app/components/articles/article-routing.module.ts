import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutes } from 'src/app/shared/models/AppRoutes';
import { RouterModule, Routes } from '@angular/router';
import { ArticleSearchComponent } from './article-search/article-search.component';

const routes: Routes = [
  {
    path: AppRoutes.article.sub,
    component: ArticleSearchComponent,
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticleRoutingModule { }
