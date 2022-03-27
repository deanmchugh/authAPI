import {
  createContext, ReactChild, useMemo, useReducer,
} from 'react'
import { Context, State } from '../@type/Context'
import reducer from './reducer'

const initialState: State = {
  auth: {
    email: '',
    password: '',
  },
}

export const AuthContext = createContext<Context>(undefined)

interface Props {
  children: ReactChild
}

export function AuthContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value: Context = useMemo(() => ({ state, dispatch }), [state])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
