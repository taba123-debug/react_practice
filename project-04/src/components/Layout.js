import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// outlet use=> react-router-dom {routing usage}
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/> 
      <Footer/>
    </div>
  )
}

export default Layout
