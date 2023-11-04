import { createAction, props } from '@ngrx/store';
import { IUser } from '@org/data-access';

export const initUsers = createAction('[Users Page] Init');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: IUser[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);

export const updateSearchFilter = createAction(
  '[Users/API] SearchFilter Update',
  props<{ searchFilter: string|null }>()
)

export const deleteUser = createAction(
  '[Users/API] DeleteUsers DeleteUsers',
  props<{ userId: number }>()
)

export const addLike = createAction("[Users/API] AddLike DeleteUsers",props<{userData: IUser}>());