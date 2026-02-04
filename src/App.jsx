
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import Forget from './auth/Forgetpass'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/Forget' element= {<Forget/>} />
    </Routes>
  )
}

export default App
