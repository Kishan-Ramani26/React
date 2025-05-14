import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../Store/authSlice";
import authService from "../appwrite/auth";

const SingUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const Dispatch = useDispatch();
  const [error, seterror] = useState("");

  const create = async (data) => {
    seterror("");
    try {
        const userData = await authService.createAccount(data)
        if(userData){
            const user = authService.getCurrentUser()
            if(user) Dispatch(login(user))
            navigate("/")
        }
    } catch (error) {
        seterror(error.message);
    }
  };

  return 
    <div>SingUp</div>;
};

export default SingUp;
