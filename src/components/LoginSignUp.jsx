import React from 'react'
import Heading from './Heading'
import LoginForm from './LoginForm'
import SignUp from './SignUp'
import { useState } from 'react'

function LoginSignUp() {
    const [showLoginForm, setShowLoginForm] = useState(false)
  return (
    <div>
      <div className='main-container'>
        <div className='sub-container'>
        <Heading />
        <div className='buttons-container'>
          <button className='form-button' onClick={() => setShowLoginForm(false)} style={{backgroundColor: !showLoginForm ? '#1a1a1a' : '#fefefe', color: !showLoginForm ? '#fefefe' : '#1a1a1a', cursor: !showLoginForm ? ' no-drop' : 'pointer'}}>Sign Up</button>
          <button className='form-button' onClick={() => setShowLoginForm(true)} style={{backgroundColor: showLoginForm ? '#1a1a1a' : '#fefefe', color: showLoginForm ? '#fefefe' : '#1a1a1a', cursor: showLoginForm ? 'no-drop' : 'pointer'}}>Login</button>
        </div>
        <div className='forms-container'>
          
          {showLoginForm ? <LoginForm />: <SignUp />}
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
