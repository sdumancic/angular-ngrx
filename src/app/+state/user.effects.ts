import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, of, switchMap, withLatestFrom } from 'rxjs';
import { IUserHttp } from '../user/user-http.model';
import { UserService } from '../user/user.service';
import { IAppState } from './app.state';
import {
  EUserActions,
  GetUsers,
  GetUser,
  GetUserSuccess,
  GetUsersSuccess,
} from './user.action';
import { selectUserList } from '../+state/user.selectors';

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetUser>(EUserActions.GetUser),
      map((action) => action.payload),
      withLatestFrom(this._store.pipe(select(selectUserList))),
      switchMap(([id, users]) => {
        const selectedUser = users.filter((user) => user.id === +id)[0];
        return of(new GetUserSuccess(selectedUser));
      })
    )
  );

  getUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetUsers>(EUserActions.GetUsers),
      switchMap(() => this._userService.getUsers()),
      switchMap((userHttp: IUserHttp) =>
        of(new GetUsersSuccess(userHttp.users))
      )
    )
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
