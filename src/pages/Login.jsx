import React, { useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAuth } from '../contexts/AuthContext';


function Login() {

    const navigate = useNavigate()
    const {setIsAuthenticated} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
          const user = userCredential.user;
          localStorage.setItem('token', user.accessToken);
          localStorage.setItem('user', JSON.stringify(user));
          setIsAuthenticated(true);
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      }



  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Welcome Back! Enter your details to login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        
        <Button className="mt-6" fullWidth onClick={handleSubmit}>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          New User? create an account here,{" "}
          <Link to="/signup" className="font-medium text-gray-900">
            Sign up
          </Link>
        </Typography>
      </form>
    </Card>
    </div>
  )
}

export default Login