import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BannerComponent from './BannerComponent'
import Client from './Client'
import Charts from './Charts'
import AboutUs from './AboutUs'
import Testimonials from './Testimonials'
import BusinessSection from './BusinessSection'

function Home() {
  const location = useLocation()

  useEffect(()=>{
    if(location.state?.showToast){
      toast.success(location.state.message,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }, [location.state])
  return (
    <div className='flex flex-col justify-start items-center'>
      <BannerComponent />
      <Client />
      <Charts />
      <AboutUs />
      <Testimonials />
      <BusinessSection />
      <ToastContainer />
    </div>
    
  )
}

export default Home
