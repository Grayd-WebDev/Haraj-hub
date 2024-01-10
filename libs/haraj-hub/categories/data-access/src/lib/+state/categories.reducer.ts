import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, createFeature } from '@ngrx/store';

import * as CategoriesActions from './categories.actions';
import { CategoriesEntity, CategoryVM } from './categories.models';

export const CATEGORIES_FEATURE_KEY = 'categories';

export interface CategoriesState extends EntityState<CategoriesEntity> {
  selectedId?: string | number; // which Categories record has been selected
  loaded: boolean; // has the Categories list been loaded
  error?: string | null; // last known error (if any)
  categories: CategoryVM[];
}

export const categoriesAdapter: EntityAdapter<CategoriesEntity> =
  createEntityAdapter<CategoriesEntity>();

export const initialCategoriesState: CategoriesState =
categoriesAdapter.getInitialState({
  categories: [],
  loaded: false,
  selectedId: "",
  error: null,
});
export const categoriesReducer = createReducer(
  initialCategoriesState,
  on(CategoriesActions.initCategories, (state) => ({
    ...state,
    loaded: false,
  })),
  on(CategoriesActions.loadCategoriesSuccess, (state, { categories }) =>(
    categoriesAdapter.setAll(categories,{...state, loaded: true})
  )),
  on(CategoriesActions.loadCategoriesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const categoriesFeatureKey = 'categories';

export const categoriesFeature = {
  name: categoriesFeatureKey,
  reducer: categoriesReducer,
};

// export const categoriesFeature = createFeature({
//   name: 'categories',
//   reducer: createReducer(
//     initialCategoriesState,
//     on(categoriesActions.initCategories, (state) => ({
//       ...state,
//       loaded: false
//     })),
//     on(categoriesActions.loadCategoriesSuccess, (state, { categories }) =>
//       categoriesAdapter.setAll(categories, { ...state, loaded: false  })
//     ),
//   )
// });

// export const categoriesFeature = createFeature({
//   name: "categories",
//   reducer: createReducer(
//     initialCategoriesState,
//     on(categoriesActions.initCategories, (state) => ({
//       ...state,
//       loaded: false,
//       error: null,
//     })),
//     on(categoriesActions.loadCategoriesSuccess, (state, { categories }) =>
//       categoriesAdapter.setAll(categories, { ...state, loaded: true })
//     ),
//     on(categoriesActions.loadCategoriesFailure, (state, { error }) => ({
//       ...state,
//       error,
//     }))
//   )
// });