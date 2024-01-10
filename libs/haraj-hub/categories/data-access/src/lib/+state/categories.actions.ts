import { createAction, props, createActionGroup, emptyProps } from '@ngrx/store';
import { CategoryVM } from './categories.models';

// export const categoriesActions = createActionGroup({
//   source: "Categories",
//   events:{
//     initCategories: emptyProps(),
//     loadCategoriesSuccess: props<{ categories: CategoryVM[] }>(),
//     loadCategoriesFailure: props<{ error: any }>()
//   }
// })

export const initCategories = createAction(
  '[Users/API] Init Categories Success',
);
export const loadCategoriesSuccess = createAction(
  '[Users/API] Load Categories Success',
  props<{ categories: CategoryVM[] }>()
);
export const loadCategoriesFailure = createAction(
  '[Users/API] Load Categories Failure',
  props<{ error: any }>()
);