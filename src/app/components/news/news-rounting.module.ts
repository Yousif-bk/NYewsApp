import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutes } from 'src/app/shared/models/AppRoutes';
import { NewsListComponent } from './news-list/news-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [
  {
    path: "",
    children: [
       {
          path: AppRoutes.news.sub,
          component: NewsListComponent,
       },
       {
        path: AppRoutes.news.details.full,
        component: NewsDetailsComponent,
     },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class NewsRountingModule { }
