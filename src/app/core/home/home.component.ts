import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Logout } from 'src/app/auth/auth.actions';
import { AuthState } from 'src/app/auth/auth.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['.arrow-up {width: 0; eight: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 10px solid orange;position:absolute ;top:-13px; left:5px}',
    '.top-border {border-top:3px solid orange; border-radius:0 0}']

})

export class HomeComponent implements OnInit {
  auth: Observable<string>
  constructor(private store: Store<AppState>, private router: Router) {
    this.auth = this.store.pipe(select('auth'), map((s: AuthState) => { if (s.user) return s.user.UserName }))
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout())
    this.router.navigate(['logout'])
  }
}
