import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoute from './routes/AppRoutes.jsx'
import HeaderApp from './component/Home/HeaderApp/HeaderApp.jsx'

function App() {


  return (
    <>
      <div className='container-app'>
        <div className='header-app'>
      <HeaderApp/>
        </div>
        <div className='content-app'>
        <AppRoute/>
        </div>
        <div className='footer-app'>
          
        </div>
      </div>
    </>
  )
}

export default App
