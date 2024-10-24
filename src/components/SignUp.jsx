import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
function SignUp() {
  const navigate = useNavigate()
  function handleSubmit() {
    navigate('/home')
  }
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" name="name" type="text" className='form-label' style={{marginBottom: "20px"}}>Username</label>
            <input type="text" name="username" id="username"   className='form-input'/>
            <label htmlFor="email" name="email" type="email" className='form-label'>Email</label>
            <input type="email" name="email" id="email"   className='form-input'/>
            <label htmlFor="password" name="password" type="text" className='form-label'>password</label>
            <input type="text" name="password" id="password"   className='form-input'/>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button className='form-button'>Sign Up</button>
            </div>
        </form>
      
    </div>
  )
}

export default SignUp
