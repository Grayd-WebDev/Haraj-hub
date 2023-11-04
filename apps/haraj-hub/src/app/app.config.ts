import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore, provideState } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { provideEffects } from '@ngrx/effects';
import * as fromUsers from '@org/users-data-access';
import { UsersEffects } from '@org/users-data-access';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(UsersEffects),
    provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
    provideEffects(),
    provideStore(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideStore({
      router: routerReducer,
      ["users"]: fromUsers.usersReducer,
    }),
  ],
};