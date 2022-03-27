import Wrapper from '../component/Wrapper'
import { AuthContextProvider } from '../state/ContextProvider'
import App from './App'

function Root() {
  return (
    <AuthContextProvider>
      <Wrapper>
        <App />
      </Wrapper>
    </AuthContextProvider>
  )
}

export default Root
