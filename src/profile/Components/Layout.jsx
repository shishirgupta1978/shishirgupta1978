import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


import React from 'react'

const Layout = () => {
  return (
    <div>
        <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
