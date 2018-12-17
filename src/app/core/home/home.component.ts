import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Logout } from 'src/app/auth/auth.actions';
import { Observable } from 'rxjs';
import { UserSelector } from 'src/app/auth/auth.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['.arrow-up {width: 0; eight: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 10px solid orange;position:absolute ;top:-13px; right:11px}',
    '.top-border {border-top:3px solid orange; border-radius:0 0}']
})

export class HomeComponent {
  User$: Observable<string>
  constructor(private store: Store<AppState>, private router: Router) {
    this.User$ = this.store.pipe(
      select(UserSelector)
    )
  }

  logout() {
    this.router.navigate(['logout'])
    this.store.dispatch(new Logout())
  }
}
