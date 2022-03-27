import { useContext } from 'react'
import { Context } from '../@type/Context'
import { AuthContext } from '../state/ContextProvider'

interface ContextHook {
  context: Context
}

function useAuthContext(): ContextHook {
  const context: Context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider')
  }

  return { context }
}

export default useAuthContext
