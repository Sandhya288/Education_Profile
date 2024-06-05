import { Outlet } from 'react-router-dom'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import React from 'react'
import Products from './Products.jsx'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Products/>
      <Footer />
    </>
  )
}

export default MainLayout