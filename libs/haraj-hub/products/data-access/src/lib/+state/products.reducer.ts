import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import { ProductsEntity } from './products.models';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState extends EntityState<ProductsEntity> {
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter: EntityAdapter<ProductsEntity> =
  createEntityAdapter<ProductsEntity>();

export const initialProductsState: ProductsState =
  productsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.initProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    productsAdapter.setAll(products, { ...state, loaded: true })
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ProductsActions.deleteProduct, (state, {id})=> productsAdapter.removeOne(id, state)),
  on(ProductsActions.likeProduct, (state, { id }) => {
    const product = state.entities[id];
    if (product) {
      return productsAdapter.updateOne(
        {
          id,
          changes: { likes: product.likes + 1 }
        },
        state
      );
    } else {
      return state;
    }
  }),
  on(ProductsActions.dislikeProduct, (state, { id }) => {
    const product = state.entities[id];
    if (product) {
      return productsAdapter.updateOne(
        {
          id,
          changes: { likes: product.likes - 1 }
        },
        state
      );
    } else {
      return state;
    }
  })
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
