// import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import ScrollToTop from '../utils/ScrollToTop'
import Navbar from '../components/Navbar'

const SharedLayout = () => {
  return (
    <div>
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout