import { useState } from 'react'
import Homepage from './screens/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './screens/About/About';
import Page404 from './screens/Page404';
import Contact from './screens/Contact/Contact';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';


function App() {


  return (
    <div className='text-center'>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Page404 />} />
      </Routes>


    </div>
  )
}

export default App
