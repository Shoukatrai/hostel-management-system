import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import SignUpPage from './pages/auth/SignUpPage'
import HomePage from './pages/auth/HomePage'
import NavBar from './components/NavBar'
import './App.css'


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        
        <Route index element = {<HomePage />} />
        <Route path='login' element = {<LoginPage />} />
        <Route path='signup' element = {<SignUpPage />} />
      </Routes>
    </div>
  )
}

export default App
