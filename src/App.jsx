import { useState } from 'react'
import Profile from './profile/App'
import {Routes,Route,Navigate} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/profile" />}/>
      <Route path="/profile/*" element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App
