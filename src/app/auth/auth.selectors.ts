import { createSelector } from '@ngrx/store';

export const selectAuthState = state => state.auth;

export const isLoggedSelector = createSelector(selectAuthState, auth => auth.isLogged)
export const UserSelector = createSelector(selectAuthState, auth => auth.user)
export const LoginameSelector = createSelector(selectAuthState, auth => auth.user.LoginName)
