import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiRoutes } from '../../models/ApiRoutes';
import { ArticleSearch } from '../../models/ArticlSearch';
import { Result, TopsSorties } from '../../models/TopsSorties';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = environment.nyTimesApiUrl;
  private apiKey = environment.NG_TIMES_API_KEY;


  constructor(private http: HttpClient) {}


  getTopStories(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + ApiRoutes.nyTimes.topsSorties + this.apiKey
    );
  }

  articleSearch(): Observable<ArticleSearch[]> {
    return this.http
      .get<ArticleSearch[]>(
        this.apiUrl + ApiRoutes.nyTimes.articleSearch + this.apiKey
      )
      .pipe(tap((data) => console.log('All: ', JSON.stringify(data))));
  }
}
