import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import LoginForm from './LoginForm'
function SignUp() {
  const [showLoginForm, setShowLoginForm] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  
  function handleChange(e){
    // const {name, value} = e.target
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    const existingData = JSON.parse(localStorage.getItem('formData')) || []
    const updatedData = [...existingData, formData]
    console.log(updatedData )
    localStorage.setItem('formData', JSON.stringify(updatedData))
    // navigate('/home')
    alert('Sign up is successfull ! Please Login')
    setShowLoginForm(true)
  }
  return (
    <div>
      {showLoginForm ? (<LoginForm />) : (
        <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" name="name" type="text" className='form-label' style={{marginBottom: "20px"}}>Username</label>
            <input type="text" name="username" id="username"    className='form-input' value={formData.username} onChange={handleChange}/>
            <label htmlFor="email" name="email" type="email" className='form-label'>Email</label>
            <input type="email" name="email" id="email"   className='form-input' value={formData.email} onChange={handleChange}/>
            <label htmlFor="password" name="password" type="text" className='form-label'>password</label>
            <input type="text" name="password" id="password"   className='form-input' value={formData.password} onChange={handleChange}/>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button  type="submit" className='form-button'>Sign Up</button>
            </div>
        </form>
      
    </div>
      )}
    </div>
  )
}

export default SignUp
