import React from 'react'

function SignUp() {
  return (
    <div className='form-container'>
        <form>
            <label htmlFor="username" name="name" type="text" className='form-label' style={{marginBottom: "20px"}}>Username</label>
            <input type="text" name="username" id="username" required  className='form-input'/>
            <label htmlFor="email" name="email" type="email" className='form-label'>Email</label>
            <input type="email" name="email" id="email" required  className='form-input'/>
            <label htmlFor="password" name="password" type="text" className='form-label'>password</label>
            <input type="text" name="password" id="password" required  className='form-input'/>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button className='form-button'>Sign Up</button>
            </div>
        </form>
      
    </div>
  )
}

export default SignUp
