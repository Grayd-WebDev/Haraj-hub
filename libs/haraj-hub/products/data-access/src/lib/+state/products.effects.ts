import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as ProductsActions from './products.actions';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productsService = inject(ProductService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initProducts),
      switchMap((action) =>
        this.productsService.getAllProducts(action.page).pipe(
          map((products)=>
            ProductsActions.loadProductsSuccess({ products })
          )
        )
      )
    )
  )
}
