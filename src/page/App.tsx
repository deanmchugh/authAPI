import { Route, Routes } from 'react-router'
import routes from '../utils/routes'
import ConfirmResetPassword from './ConfirmResetPassword'
import Register from './Register'
import ResetPassword from './ResetPassword'
import SignIn from './SignIn'

function App() {
  return (
    <Routes>
      <Route path={routes.register()} element={<Register />} />
      <Route path={routes.signIn()} element={<SignIn />} />
      <Route path={routes.resetPassword()} element={<ResetPassword />} />
      <Route path={routes.confirmResetPassword()} element={<ConfirmResetPassword />} />
    </Routes>
  )
}

export default App
