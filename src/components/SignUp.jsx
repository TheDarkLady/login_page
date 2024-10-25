import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './LoginForm';

function SignUp() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    // Test if toast is working on component load
    toast.success('Testing toast on load', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
      transition: Bounce,
    });
  }, []); // Run only once on mount

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function notify(message) {
    toast.success(message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
      transition: Bounce,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem('formData', JSON.stringify(updatedData));

    notify('Sign up is successful! Please Login');
    setShowLoginForm(true);
  }

  return (
    <div>
      {showLoginForm ? (
        <>
        <LoginForm />
        </>
      ) : (
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className='form-label' style={{ marginBottom: '20px' }}>
              Username
            </label>
            <input type="text" name="username" id="username" className='form-input' value={formData.username} onChange={handleChange} />
            <label htmlFor="email" className='form-label'>
              Email
            </label>
            <input type="email" name="email" id="email" className='form-input' value={formData.email} onChange={handleChange} />
            <label htmlFor="password" className='form-label'>
              Password
            </label>
            <input type="password" name="password" id="password" className='form-input' value={formData.password} onChange={handleChange} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="submit" className='form-button'>Sign Up</button>
            </div>
          </form>
        </div>
      )}
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
        transition={Bounce}
      />
    </div>
  );
}

export default SignUp;
