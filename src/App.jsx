import React, { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import LoginSignUp from './components/LoginSignUp'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginSignUp/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
