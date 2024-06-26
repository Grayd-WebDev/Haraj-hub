import { Subscription, takeUntil } from 'rxjs';
import { ProductsFacade } from '@org/hh-products-data-access';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { LetDirective } from '@ngrx/component';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'org-feature-products',
  standalone: true,
  imports: [CommonModule, ProductsCardComponent, LetDirective],
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProductsComponent {
  private route = inject(ActivatedRoute);
  private categoryId!: string|null;
  private productsFacade = inject(ProductsFacade);
  public products$ = this.productsFacade.allProducts$;
  public productsLoaded$ = this.productsFacade.loaded$;

  constructor(){
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe(params => {
      this.categoryId = params.get('id');
      console.log(this.categoryId);
    })
    
    this.products$.subscribe((prods)=>{
      console.log(prods);
    })
  }
}
