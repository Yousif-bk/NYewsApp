import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsRountingModule } from './news-rounting.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewsListComponent,
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsRountingModule,
    RouterModule
  ]
})
export class NewsModule { }
