import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'
import Home from './Home/home'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
    {/* Up and down same but components change may in it  */}
    {/* Outlet used to change things in surroundings  */}
      <Header/> 
      <Outlet/>  
      <Footer/>
      <Home/>
    </>
  )
}

export default layout
