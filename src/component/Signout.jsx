import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { useAuth } from '../contexts/AuthContext';



function Signout() {

  const {setIsAuthenticated} = useAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setIsAuthenticated(false);
      console.log("signed out")
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='p-4 ml-auto'>
      <Button onClick={handleLogout}>Sign out</Button>
    </div>
  )
}

export default Signout