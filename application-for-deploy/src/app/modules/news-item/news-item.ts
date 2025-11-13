import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments, Description } from './components';
import { BehaviorSubject } from 'rxjs';
import { ItemData, NewsService } from '@core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { Loader } from '@shared';

@Component({
  selector: 'app-news-item',
  imports: [Description, Comments, AsyncPipe, Loader],
  templateUrl: './news-item.html',
  styleUrl: './news-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItem implements OnInit{
  protected id = signal('')

  protected item$ = new BehaviorSubject<ItemData | null>(null)
  protected isLoading$ = new BehaviorSubject<boolean>(false)

  private activatedRoute = inject(ActivatedRoute)
  private destroyRef = inject(DestroyRef)
  private news = inject(NewsService)

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.id.set(params['id']);
    })  
  }

  ngOnInit(): void {
    this.news.item$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => this.item$.next(res))
    this.news.isLoading$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => this.isLoading$.next(res))

    this.news.getDataFromApi({url: `https://hn.algolia.com/api/v1/items/${this.id()}`, type: 'item'})
  }
}
