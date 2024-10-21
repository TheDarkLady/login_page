import React from 'react'

function LoginForm() {
  return (
    <div className='form-container'>
        <form>
            <label htmlFor="username" name="name" type="text" className='form-label'>Username</label>
            <input type="text" name="username" id="username" required  className='form-input'/>
            <label htmlFor="password" name="password" type="text" className='form-label'>password</label>
            <input type="text" name="password" id="password" required  className='form-input'/>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button className='form-button'>Login</button>
            </div>
        </form>
      
    </div>
  )
}

export default LoginForm
