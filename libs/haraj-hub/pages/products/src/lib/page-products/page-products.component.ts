import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureProductsComponent } from '@org/feature-products';

@Component({
  selector: 'org-page-products',
  standalone: true,
  imports: [CommonModule, FeatureProductsComponent],
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageProductsComponent {}
