import { IUser } from '@org/data-access';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { IFilterOptions, UsersEntity } from './users.models';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState extends EntityState<UsersEntity> {
  selectedId?: string | number; // which Users record has been selected
  loaded: boolean; // has the Users list been loaded
  error?: string | null; // last known error (if any)
  filterOptions: IFilterOptions;
  users: IUser[];
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const usersAdapter: EntityAdapter<UsersEntity> =
  createEntityAdapter<UsersEntity>();

export const initialUsersState: UsersState = usersAdapter.getInitialState({
  users:[],
  filterOptions:{
    searchFilter: "",
  },
  loaded: false,
});

const reducer = createReducer(
  initialUsersState,
  on(UsersActions.initUsers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, loaded: true })
  ),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),
  on(UsersActions.updateSearchFilter, (state,  { searchFilter }) => {
    return ({ ...state, filterOptions: {...state.filterOptions, searchFilter}})
  }),
  on(UsersActions.deleteUser, (state,  { userId }) => usersAdapter.removeOne(userId, state)),
  on(UsersActions.addLike, (state,  { userData }) => {
    return usersAdapter.updateOne({id: userData.id, changes: {...userData, likes: userData.likes+1}}, state)
  }),
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
} 