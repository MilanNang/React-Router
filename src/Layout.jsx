import React from 'react'
import Header from './Componets/Header/Header'
import Home from './Componets/Home'
import About from './Componets/About/About'
import { Outlet } from 'react-router'
import Futer from './Componets/Futer/futer'

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