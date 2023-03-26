import { useState } from 'react'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Project from './routes/Project'
import Layout from './Components/Layout'
import {Routes,Route,Navigate} from 'react-router-dom'
import './index.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Navigate to="/profile/home"/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
