import React, { useState } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'
function LoginForm() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const [errormsg, setErrormsg] = useState('')
  // const messages = ['Details Incorrect', 'Successfully Logged In']
   function notify (message) {
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
   }
  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(loginData)
    const existingData = JSON.parse(localStorage.getItem('formData')) || []
    const user = existingData.find(user => user.username === loginData.username && user.password === loginData.password)
    if (user) {
      // notify('Successfully Logged In')
      // setTimeout(() => navigate('/home'), 2000)
      navigate('/home', {state: {showToast: true, message: 'Successfully Logged In'}})
    }
    else {
      notify('Details Incorrect')
      // alert('Details Incorrect')
      // setErrormsg('Details Incorrect')
      
    }
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" name="name" type="text" className='form-label'>Username</label>
        <input type="text" name="username" id="username" className='form-input' value={loginData.username} onChange={handleChange} />
        <label htmlFor="password" name="password" type="text" className='form-label'>password</label>
        <input type="text" name="password" id="password" className='form-input' value={loginData.password} onChange={handleChange} />
        {errormsg && (<p style={{ color: '#fff', border: '1px solid red', padding: '5px', borderRadius: '5px', textAlign: 'center' }}>{errormsg}</p>)}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" className='form-button' >Login</button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
          />
        </div>
      </form>

    </div>
  )
}

export default LoginForm
