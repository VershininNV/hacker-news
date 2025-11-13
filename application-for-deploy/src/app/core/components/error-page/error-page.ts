import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Error401, Error404, Error500 } from './errors';

@Component({
  selector: 'app-error-page',
  imports: [Error404, Error500, Error401],
  templateUrl: './error-page.html',
  styleUrl: './error-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPage {
  protected code = signal('')
  protected error404 = '404'
  protected error401 = '401'
  protected error500 = '500'

  private activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.code.set(params['code']);
    })
    console.log(this.code())
  }
}
