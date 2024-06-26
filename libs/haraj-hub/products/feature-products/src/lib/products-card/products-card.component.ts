import { ProductsEntity } from '@org/hh-products-data-access';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StarRatingComponent } from '@org/star-rating';

@Component({
  selector: 'org-products-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, CurrencyPipe, StarRatingComponent],
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsCardComponent {
  @Input() public product!:ProductsEntity;

  selectedTabIndex = 0;

  onMouseEnter() {
    // Add any additional actions on mouse enter
  }

  onMouseLeave() {
    // Add any additional actions on mouse leave
  }
}
