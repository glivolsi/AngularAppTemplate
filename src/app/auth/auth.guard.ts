import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { Subscription, Observable } from 'rxjs';
import { isLoggedSelector } from './auth.selectors';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    isAuthenticated: boolean;
    authSubscription: Subscription
    constructor(private store: Store<AppState>, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isLoggedSelector),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigate(['login'],
                        {
                            queryParams: {
                                return: state.url
                            }
                        }

                    )
                }
            })
        )
    }
}