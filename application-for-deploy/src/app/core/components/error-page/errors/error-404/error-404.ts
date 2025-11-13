import { ChangeDetectionStrategy, Component, inject, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/constants/routes';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-error-404',
  imports: [TuiButton],
  templateUrl: './error-404.html',
  styleUrl: './error-404.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error404 {
 protected readonly router = inject(Router)
 protected readonly path = isDevMode() ? '/assets/gif/404.gif' : '/hacker-news/assets/gif/404.gif'

 public redirectToHome(): void {
  this.router.navigateByUrl(AppRoutes.Home)
 }
}
