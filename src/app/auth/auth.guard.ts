import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, OnDestroy {

    isAuthenticated: boolean;
    authSubscription: Subscription

    constructor(private store: Store<AppState>, private router: Router) {
        this.authSubscription = this.store.select('auth').subscribe(x => {
            this.isAuthenticated = x.isLogged
        }
        )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.isAuthenticated) {
            this.router.navigate(['login'],
                {
                    queryParams: {
                        return: state.url
                    }
                }
            );
            return false;
        }
        return true;
    }
    ngOnDestroy(): void {
        this.authSubscription.unsubscribe()
    }
}