import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  
  function handleChange(e){
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  function handleSubmit() {
    console.log(formData)
    localStorage.setItem('formData', JSON.stringify(formData))
    navigate('/home')
  }
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" name="name" type="text" className='form-label' style={{marginBottom: "20px"}}>Username</label>
            <input type="text" name="username" id="username" required   className='form-input' value={formData.username} onChange={handleChange}/>
            <label htmlFor="email" name="email" type="email" className='form-label'>Email</label>
            <input type="email" name="email" id="email" required  className='form-input' value={formData.email} onChange={handleChange}/>
            <label htmlFor="password" name="password" type="text" className='form-label'>password</label>
            <input type="text" name="password" id="password" required  className='form-input' value={formData.password} onChange={handleChange}/>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button className='form-button'>Sign Up</button>
            </div>
        </form>
      
    </div>
  )
}

export default SignUp
