import { Action, AUTH_ACTION, State } from '../@type/Context'

function reducer(state: State, action: Action): State {
  const { type, payload } = { ...action }

  switch (type) {
    case AUTH_ACTION.SET_USER_PARAMS: return { ...state, auth: payload }
    default: return state
  }
}

export default reducer
