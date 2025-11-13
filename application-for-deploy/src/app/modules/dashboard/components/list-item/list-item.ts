import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemData } from '@core';
import { TuiButton, TuiLink } from '@taiga-ui/core';
import { TuiBadge, TuiFade } from '@taiga-ui/kit';

@Component({
  selector: 'app-list-item',
  imports: [TuiBadge, TuiButton, TuiFade, TuiLink],
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItem {
  public item = input<ItemData>()

  private router = inject(Router)

  protected redirectToItemPage(): void {
    this.router.navigateByUrl('item/' + this.item()?.story_id)
  }
}
