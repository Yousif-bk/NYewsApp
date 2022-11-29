import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { JwtInterceptors } from './shared/helper/interceptors/interceptors';
import { SharedModule } from './shared/shared.module';
import { metaReducerLocalStorage, storeReducer } from './shared/store/news.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({ newsEntries: storeReducer }, { metaReducers: [ metaReducerLocalStorage ] }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptors, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }