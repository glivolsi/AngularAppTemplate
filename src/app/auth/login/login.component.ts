import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Login } from '../auth.actions';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    Username: Observable<any>
    returnPath: string = '';
    constructor(private store: Store<AppState>, private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.Username = this.store.select('auth')
        this.route.queryParams
            .subscribe(params => this.returnPath = params['return'] || '/');
    }

    login() {
        this.store.dispatch(new Login({ user: { UserName: 'Pippo', LoginName: 'PLUTO\\pippo' } }))
        this.router.navigate([this.returnPath])
    }
}