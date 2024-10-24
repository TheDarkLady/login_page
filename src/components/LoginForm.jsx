import React from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
function LoginForm() {
  const navigate = useNavigate()
  return (
    <div className='form-container'>
        <form onSubmit={() => navigate('/home')}>
            <label htmlFor="username" name="name" type="text" className='form-label'>Username</label>
            <input type="text" name="username" id="username"   className='form-input'/>
            <label htmlFor="password" name="password" type="text" className='form-label'>password</label>
            <input type="text" name="password" id="password"   className='form-input'/>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button className='form-button'>Login</button>
            </div>
        </form>
      
    </div>
  )
}

export default LoginForm
