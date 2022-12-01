import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiRoutes } from '../../models/ApiRoutes';
import { Doc } from '../../models/ArticlSearch';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = environment.nyTimesApiUrl;
  private apiKey = environment.NG_TIMES_API_KEY;
  result: Doc[]
  public articles  = new BehaviorSubject<Doc[]>([]);
  articlesAction = this.articles.asObservable();

  constructor(private http: HttpClient) { }

  setArticles(article: Doc[]){
    this.articles.next(article)
  }

  getArticles(){
    return this.articles;
  }

  getFilteredArticle(searchKey: string){

    this.getArticles().pipe(
        map(x => x.filter((res: any) => {
          if(!searchKey){
            return res
          }
          return res.abstract.includes(searchKey)
        }))
      ).subscribe((res) => {
        this.result = res
      })
      return this.result;
  }

  getTopStories(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + ApiRoutes.nyTimes.topsSorties + this.apiKey
    );
  }

  getSelectedCategory(categoryName: string): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + ApiRoutes.nyTimes.topsSorties + this.apiKey
    ).pipe(
      map(x => x.results.filter((result: any) => {
        if (categoryName === "all") {
          return result;
        } else {
          return result.section === categoryName
        }
      }))
    )
  }

  articleSearch(article?: string): Observable<any> {
    return this.http
      .get<any>(
        this.apiUrl + ApiRoutes.nyTimes.articleSearch + this.apiKey)
      // ).pipe(
      //   map(x => x.response.docs.filter((res: any) => {
      //     if(!article){
      //       return res
      //     }
      //     return res.abstract.includes(article)
      //   }))
      // )
  }
}
