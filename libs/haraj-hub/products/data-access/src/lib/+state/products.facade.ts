import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import * as ProductsFeature from './products.reducer';
import * as ProductsSelectors from './products.selectors';
import { ProductsEntity } from './products.models';

@Injectable({providedIn: "root"})
export class ProductsFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ProductsSelectors.selectProductsLoaded));
  allProducts$ = this.store.pipe(select(ProductsSelectors.selectAllProducts));
  selectedProducts$ = this.store.pipe(select(ProductsSelectors.selectEntity));

  public deleteProduct(id: number){
   this.store.dispatch(ProductsActions.deleteProduct({id}));
  }

  public addProduct(product: ProductsEntity){
    this.store.dispatch(ProductsActions.addProduct({product}));
  }

  public likeProduct(id: number):void{
    this.store.dispatch(ProductsActions.likeProduct({id}));
  }

  public dislikeProduct(id: number):void{
    this.store.dispatch(ProductsActions.dislikeProduct({id}));
  }

  constructor(){
    this.store.dispatch(ProductsActions.initProducts({page:1}));
  }
}
