import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';

import * as fromAuth from './auth.reducer';

@NgModule({
    imports: [CommonModule, StoreModule.forFeature('auth', fromAuth.authReducer)],
    exports: [],
    declarations: [LoginComponent, LogoutComponent],
    providers: [],
})
export class AuthModule { }
