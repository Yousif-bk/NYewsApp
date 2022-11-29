import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
