import { ChangeDetectionStrategy, Component, inject, isDevMode, linkedSignal } from '@angular/core';
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
  protected readonly path = linkedSignal({
    source: () => (this.darkMode()),
    computation: (source) => {
      return (isDevMode() ? '/assets/' : '/hacker-news/assets/') + 'images/logotype/' + (source ? 'logo_accent.png' : 'logo.png')
    }
  });
}
