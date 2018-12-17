import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login } from '../auth.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {

    returnPath: string = '';
    queryParamsSubscription: Subscription

    constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.queryParamsSubscription = this.route.queryParams
            .subscribe(params => this.returnPath = params['return'] || '/');
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe()
    }

    login() {
        this.store.dispatch(new Login({ user: { UserName: 'Pippo', LoginName: 'PLUTO\\\pippo' } }))
        this.router.navigate([this.returnPath])
    }
}