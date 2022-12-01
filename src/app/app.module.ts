import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './components/articles/article.module';
import { AuthModule } from './components/auth/auth.module';
import { JwtInterceptors } from './shared/helper/interceptors/interceptors';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ArticleModule,
    HttpClientModule,
    StoreModule.forRoot({})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptors, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
