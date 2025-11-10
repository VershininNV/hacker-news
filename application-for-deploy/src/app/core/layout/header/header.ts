import { ChangeDetectionStrategy, Component, inject, isDevMode } from '@angular/core';
import { ThemeSwitcher } from '@shared';
import { TUI_DARK_MODE } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  imports: [ThemeSwitcher],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  protected readonly darkMode = inject(TUI_DARK_MODE);
  protected readonly href = isDevMode() ? '/' : '/hacker-news/'
  protected readonly path = (isDevMode() ? '/assets/' : '/hacker-news/') + 'images/logotype/' + (this.darkMode() ? 'logo_accent.png' : 'logo.png')
}
