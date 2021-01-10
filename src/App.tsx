import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import RouteContainer from './components/route-container/RouteContainer'

function App () {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <RouteContainer />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
