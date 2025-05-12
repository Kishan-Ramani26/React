import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import { login } from '../Store/authSlice'
import {Button , Input , Logo} from './index';
import authService from '../appwrite/auth';
import {useForm} from "react-hook-form"

function Login() {
  return (
    <div>Login</div>
  )
}

export default Login