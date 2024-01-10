import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CategoriesActions from './categories.actions';
import * as CategoriesFeature from './categories.reducer';
import * as CategoriesSelectors from './categories.selectors';
import { first, tap } from 'rxjs';

@Injectable({providedIn: "root"})
export class CategoriesFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CategoriesSelectors.selectCategoriesLoaded));
  allCategories$ = this.store.pipe(
    select(CategoriesSelectors.selectAllCategories),
  );
  selectedCategories$ = this.store.pipe(
    select(CategoriesSelectors.selectEntity)
  );

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.loaded$.pipe(first()).subscribe((loaded) => {
      if (!loaded) {
        this.store.dispatch(CategoriesActions.initCategories());
      }
    });
  } 
}
