import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {
  isLogged: boolean,
  user: User
}

const initialAuthState: AuthState = { isLogged: false, user: undefined }

export function authReducer(Authstate = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        isLogged: true,
        user: action.payload.user
      }
    case AuthActionTypes.LogoutAction:
      return {
        isLogged: false,
        user: undefined
      }
    default:
      return Authstate;
  }
}
