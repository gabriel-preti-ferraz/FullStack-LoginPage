import { Routes, Route } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PassRecovery from './pages/PassRecovery'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import './css/App.css'

function App() {
  return ( <>
      <Navbar />
      <main>
        <Routes> 
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/pass-recovery' element={<PassRecovery />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </main>
    </>
  )
}

export default App
