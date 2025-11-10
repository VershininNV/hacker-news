import { inject, Injectable } from '@angular/core';
import { HttpService, NewsData } from '@core';

import { BehaviorSubject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public news$ = new BehaviorSubject<NewsData | null>(null)
  public item$ = new BehaviorSubject<any | null>(null)
  public isLoading$ = new BehaviorSubject<boolean>(false)
  public defualtRoute = 'https://hn.algolia.com/api/v1/search?tags=front_page'

  private http = inject(HttpService)
  
  public getDataFromApi(params: {url: string, type: 'news' | 'item'}): void {
    this.isLoading$.next(true)

    this.http.get(params.url).pipe(delay(1500)).subscribe({
        next: (res: any) => {
          if(params.type === 'news') {
            this.news$.next(res)
          }
          else {
            this.item$.next(res)
          }
          
        },
        complete: () => {
          this.isLoading$.next(false)
        },
      })
  }
}
