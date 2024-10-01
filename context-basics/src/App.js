import React from 'react'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

const App = () => {
  return (
    <UsercontextProvider>

      <h1>Tabban!</h1>
      <div>    <Login/>
      </div>
    <Profile/>
    </UsercontextProvider>
  )
}

export default App
