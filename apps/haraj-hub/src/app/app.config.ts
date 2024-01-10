import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { provideEffects } from '@ngrx/effects';
import * as fromUsers from '@org/users-data-access';
import * as fromCategories from '@org/hh-categories-data-access';
import { UsersEffects } from '@org/users-data-access';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CategoriesEffects } from '@org/hh-categories-data-access';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(
      CategoriesEffects,
      UsersEffects,
    ),
    provideAnimations(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideStore({
      router: routerReducer,
      ['users']: fromUsers.usersReducer,
      ['categories']: fromCategories.categoriesReducer,
    }),
  ],
};
