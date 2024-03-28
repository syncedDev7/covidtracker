import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import StateDaily from "./pages/StateDaily";
import StateOverall from "./pages/StateOverall";
import Footer from "./component/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";








export default function App() {

  const {isAuthenticated} = useAuth()
  return (
    <>

    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={!isAuthenticated?<Signup/>:<Navigate to="/"/>}/>
          <Route path="/login" element={!isAuthenticated?<Login/>:<Navigate to='/'/>}/>
          <Route path="/" element={isAuthenticated?<Homepage/>:<Navigate to="/login"/>}/>
          <Route path="/daily" element={isAuthenticated?<StateDaily/>:<Navigate to='/login'/>}/>
          <Route path="/overall" element={isAuthenticated?<StateOverall/>:<Navigate to='/login'/>}/>
        </Routes>
    </BrowserRouter>
    

    <Footer/>
    </>
  );
}
