import { ChangeDetectionStrategy, Component, inject, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/constants';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-error-500',
  imports: [TuiButton],
  templateUrl: './error-500.html',
  styleUrl: './error-500.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error500 {
  protected readonly router = inject(Router)
  protected readonly path = isDevMode() ? '/assets/gif/500.gif' : '/hacker-news/assets/gif/500.gif'

  public redirectToHome(): void {
    this.router.navigateByUrl(AppRoutes.Home)
   }
}
