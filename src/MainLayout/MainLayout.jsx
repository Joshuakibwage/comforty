import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './../Components/Navbar/Navbar';
import Home from './../pages/Home/Home';
import Auth from './../pages/Auth/Auth';
import Login from './../pages/Auth/Login/Login';
import Register from './../pages/Auth/Register/Register';
import Error from './../pages/Error/Error';
import AuthCheck from '../AuthCheck/AuthCheck';
import Footer from './../Components/Footer/Footer';




const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* navbar */}
      <Navbar />
      <Routes>
        <Route path='/' element={
          <AuthCheck>
            <Home />
          </AuthCheck>
          } />
        <Route path='auth' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        {/* not found routes */}
        <Route path='*' element={<Error />} />
      </Routes>
      {/* footer component */}
      <Footer />
    </BrowserRouter>
  )
}

export default MainLayout
