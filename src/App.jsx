import React from 'react'
import Navbar from "./components/navbar"
import Footer from './components/footer'
import {Outlet} from "react-router-dom"
import ScrollToTop from './components/scrolltotop'

const App = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App