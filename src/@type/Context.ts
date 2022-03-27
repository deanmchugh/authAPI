import { Dispatch } from 'react'

export interface Auth {
  email: string
  password: string
}

export interface State {
  error?: string,
  auth: Auth
}

export enum AUTH_ACTION {
  SET_USER_PARAMS,
}

export type Action = { type: AUTH_ACTION.SET_USER_PARAMS, payload: Auth }

export interface Context {state: State, dispatch: Dispatch<Action>}
