
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './auth/login'
import Forget from './auth/Forgetpass'
import Mailsender from './auth/Mailsender'
import Otp from './auth/Otp'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/Forget' element= {<Forget/>} />
      <Route path='/MailSend' element={<Mailsender/>}/>
      <Route path='/Otp' element={<Otp/>}/>
    </Routes>
  )
}

export default App
