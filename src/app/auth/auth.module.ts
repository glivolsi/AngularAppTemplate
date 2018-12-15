import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { LogoutComponent } from './login/logout.component';

@NgModule({
    imports: [CommonModule, StoreModule.forFeature('auth', fromAuth.authReducer)],
    exports: [],
    declarations: [LoginComponent, LogoutComponent],
    providers: [],
})
export class AuthModule { }
