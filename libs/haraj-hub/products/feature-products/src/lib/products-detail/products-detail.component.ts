import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsDetailComponent {}
