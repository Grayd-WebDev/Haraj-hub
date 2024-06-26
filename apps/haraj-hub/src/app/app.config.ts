import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import * as fromUsers from '@org/users-data-access';
import * as fromProducts from '@org/hh-products-data-access';
import * as fromCategories from '@org/hh-categories-data-access';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(fromCategories.CategoriesEffects, fromUsers.UsersEffects, fromProducts.ProductsEffects),
    provideAnimations(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideStore({
      router: routerReducer,
      [fromUsers.USERS_FEATURE_KEY]: fromUsers.usersReducer,
      [fromProducts.PRODUCTS_FEATURE_KEY]: fromProducts.productsReducer,
      [fromCategories.CATEGORIES_FEATURE_KEY]: fromCategories.categoriesReducer,
    }),
  ],
};
