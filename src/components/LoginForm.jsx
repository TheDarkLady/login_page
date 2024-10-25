import React, { useState } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
function LoginForm() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    username: '',
    password:''
  })
  const [errormsg, setErrormsg] = useState('')
  function handleChange(e){
    setLoginData({...loginData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(loginData)
    const existingData = JSON.parse(localStorage.getItem('formData')) || []
    const user = existingData.find(user => user.username === loginData.username && user.password === loginData.password)
    if(user){
      navigate('/home')
    }
    else{
      // alert('Details Incorrect')
      setErrormsg('Details Incorrect')
    }
  }
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" name="name" type="text" className='form-label'>Username</label>
            <input type="text" name="username" id="username"   className='form-input' value={loginData.username} onChange={handleChange}/>
            <label htmlFor="password" name="password" type="text" className='form-label'>password</label>
            <input type="text" name="password" id="password"   className='form-input' value={loginData.password} onChange={handleChange}/>
            {errormsg && (<p style={{color: '#fff', border: '1px solid red', padding: '5px', borderRadius: '5px', textAlign: 'center'}}>{errormsg}</p>)}
            <div style={{display: "flex", justifyContent: "center"}}>
            <button className='form-button'>Login</button>
            </div>
        </form>
      
    </div>
  )
}

export default LoginForm
