import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router'
import Futer from './Components/Futer/Futer'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Futer />
    
    </>
  )
}

export default Layout