import { ChangeDetectionStrategy, Component, isDevMode } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-error-401',
  imports: [TuiButton],
  templateUrl: './error-401.html',
  styleUrl: './error-401.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error401 {
 protected readonly path = isDevMode() ? '/assets/gif/401.gif' : '/hacker-news/assets/gif/401.gif'

 public authorize(): void {
 }
}
