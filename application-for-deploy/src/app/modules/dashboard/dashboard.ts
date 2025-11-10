import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { NewsList, NewsPagination, NewsSearch, NewsSorter } from './components';
import { NewsData, NewsService } from '@core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TuiSkeleton } from '@taiga-ui/kit';


@Component({
  selector: 'app-dashboard',
  imports: [NewsList, NewsPagination, NewsSearch, NewsSorter, AsyncPipe, TuiSkeleton],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard implements OnInit{
  protected news$ = new BehaviorSubject<NewsData | null>(null)
  protected isLoading$ = new BehaviorSubject<boolean>(false)
  
  private destroyRef = inject(DestroyRef);
  private news = inject(NewsService)

  ngOnInit(): void {
    this.news.news$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => this.news$.next(res))
    this.news.isLoading$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => this.isLoading$.next(res))

    this.news.getDataFromApi({url: this.news.defualtRoute, type: 'news'})
  }

  protected onSearching(searchValue: string | null): void {
    this.news.getDataFromApi(!!searchValue ?  
      {url: `https://hn.algolia.com/api/v1/search?query=${searchValue}&tags=front_page`, type: 'news'} : 
      {url: this.news.defualtRoute, type: 'news'})
    
  }

  protected onSorting(option: {signType: string, ratingValue: number} | null): void {
    this.news.getDataFromApi(!!option ?  
      {url: `https://hn.algolia.com/api/v1/search?tags=front_page&numericFilters=points${option.signType}${option.ratingValue}`, type: 'news'} :
      {url: this.news.defualtRoute, type: 'news'})
  }

  protected onPageChanging(pageNumber: number): void {
    this.news.getDataFromApi({url: `https://hn.algolia.com/api/v1/search?tags=front_page&page=${pageNumber}`, type: 'news'})
  }
}
