import { exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { autoLogin, loginStart, loginSuccess, logout, logOutSuccess, signupStart, signupSuccess } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { AuthService } from '../shared/auth.service';
import { setButtonLoading } from 'src/app/store/shared/shared.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  url : string = '';
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.url = params['returnUrl'];
    });
  }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.status).pipe(
          map((data) => {
            console.log(data)
              if(data.returns.status === 200){
                this.store.dispatch(setButtonLoading({ status: false }));
                const user = data.entries;
                return loginSuccess({ user, redirect: true });
              }
              else{
                this.store.dispatch(setButtonLoading({ status: false }));
                const user: object = {};
                return logOutSuccess({user});
              }
          }),
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginSuccess, signupSuccess]),
        tap((action) => {
          if (action.redirect) {
            if(this.url){
              this.router.navigate([this.url])
            }
            else{
              this.router.navigate(['/'])
            }
          }
        })
      );
    },
    { dispatch: false }
  );



  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.authService.getCurrentUser();
        return of(loginSuccess({ user, redirect: false }));
      })
    );
  });

  logout$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(logout),
        map((action) => {
          this.authService.logout();
          this.router.navigate(['/authentication/login']);
          const user: object = {};
          return logOutSuccess({user});
        })
      );
  });

}
