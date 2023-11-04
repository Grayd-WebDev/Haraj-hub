import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERS_FEATURE_KEY, UsersState, usersAdapter } from './users.reducer';

// Lookup the 'Users' feature state managed by NgRx
export const selectUsersState =
  createFeatureSelector<UsersState>(USERS_FEATURE_KEY);

const { selectAll, selectEntities } = usersAdapter.getSelectors();

export const selectUsersLoaded = createSelector(
  selectUsersState,
  (state: UsersState) => state.loaded
);

export const selectUsersError = createSelector(
  selectUsersState,
  (state: UsersState) => state.error
);

export const selectAllUsers = createSelector(
  selectUsersState,
  (state: UsersState) => selectAll(state)
);

export const selectUsersEntities = createSelector(
  selectUsersState,
  (state: UsersState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectUsersState,
  (state: UsersState) => state.selectedId
);

export const selectSearchFilter = createSelector(
  selectUsersState,
  (state: UsersState) => state.filterOptions.searchFilter
);

export const selectFilteredUsers = createSelector(
  selectAllUsers,
  selectSearchFilter,
  (users, searchFilter) => {
    const searchQuery: string = (searchFilter || '').toLocaleLowerCase();  
    return users.filter((user)=>user.name.toLowerCase().includes(searchQuery))
  }
);

export const selectEntity = createSelector(
  selectUsersEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);