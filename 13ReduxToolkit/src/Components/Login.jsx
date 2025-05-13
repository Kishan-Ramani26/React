import React,{useState} from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import { login as authlogin } from '../Store/authSlice'
import {Button , Input , Logo} from './index';
import authService from '../appwrite/auth';
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';

function Login() {

    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const {register,handleSubmit} = useForm()
    const [error, seterror] = useState("");

    const login = async(data) =>{
        seterror("");
        try {
            const session = await authService.login(data)
            if(session){
              const userData = await authService.getCurrentUser()
              if(userData) Dispatch(authlogin(userData))
                navigate("/")
            }
        } catch (error) {
            seterror(error.message)
        }
    }

  return (
    
  )
}

export default Login