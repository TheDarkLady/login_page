import React, { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false)

  return (
    <>
      <div className='main-container'>
        <Heading />
        <div className='buttons-container'>
          <button className='form-button' onClick={() => setShowLoginForm(false)}>Sign Up</button>
          <button className='form-button' onClick={() => setShowLoginForm(true)}>Login</button>
        </div>
        <div className='forms-container'>
          {showLoginForm ? <LoginForm />: <SignUp />}
        </div>
      </div>
    </>
  )
}

export default App
