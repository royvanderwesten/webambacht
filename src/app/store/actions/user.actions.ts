import { createAction, props } from '@ngrx/store';

export const setUser = createAction(
  '[USER] Set user', props<{ email: string | null | undefined, emailVerified: boolean | undefined, uid: string | null | undefined}>()
);
