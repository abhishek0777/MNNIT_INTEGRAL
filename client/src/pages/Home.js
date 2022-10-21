import React from 'react'

// import components
import Navbar from '../components/Home/Navbar'
import Login from '../components/Home/Login'
import AboutUs from '../components/Home/AboutUs'
import Features from '../components/Home/Features'
import ContactUs from '../components/Home/ContactUs'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Login/>
        <AboutUs/>
        <Features/>
        <ContactUs/>
        <Footer/>
    </div>

  )
}

export default Home