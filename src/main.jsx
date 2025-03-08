import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Header from './Componets/Header/Header.jsx'
import Layout from './Layout.jsx'
import About from './Componets/About/About.jsx'
import Contectus from './Componets/Contectus/Contectus.jsx'
import Home2 from './Componets/Header/Home2.jsx'
import User from './Componets/User.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Layout/>}>
        <Route path='/' element={<Home2 />}> </Route>
       <Route path="About" element={<About/>}></Route>
       <Route path="Contectus" element={<Contectus/>}></Route>
       <Route path='user/:id' element={<User />}></Route>
       
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
