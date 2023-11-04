import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';
import { UsersService } from '@org/data-access';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.initUsers),
      switchMap(() =>
      {
        return this.usersService.getUsers().pipe(
          map(users=>{
            const usersWithLikes = users.map((user)=>({...user, likes:0}));
            return UsersActions.loadUsersSuccess({ users: usersWithLikes });
          }),
          catchError(error=>of(UsersActions.loadUsersFailure({ error })))
        );
      }),
    )
  );
}
