import { Action, createReducer, on } from '@ngrx/store';
import * as ExampleActions from '../actions/user.actions';

export interface State {}
export const initialState: State = {};

export const userReducer = createReducer(
  initialState,
  on(ExampleActions.setUser, (state, { email, emailVerified, uid }) => ({ ...state, email, emailVerified, uid }))
);
