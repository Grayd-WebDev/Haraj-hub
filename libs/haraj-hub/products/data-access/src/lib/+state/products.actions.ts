import { createAction, props } from '@ngrx/store';
import { ProductsEntity, Message } from './products.models';

export const initProducts = createAction('[Products Page] Init', 
  props<{page: number}>());

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: ProductsEntity[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ error: any }>()
);

export const deleteProduct = createAction(
  '[Products/API] Delete Product',
  props<{ id: number }>()
);


export const addProduct = createAction(
  '[Products/API] Add Product',
  props<{ product: ProductsEntity }>()
);

export const likeProduct = createAction(
  '[Products/API] Like Product',
  props<{id: number}>()
);


export const dislikeProduct = createAction(
  '[Products/API] Dislike Product',
  props<{id: number}>()
);

