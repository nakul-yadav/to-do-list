import React, { useState } from 'react'
import { useContext } from 'react'
import GlobalItem from '../store/globalItem'
import Axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const {setLogin,email,setEmail}=useContext(GlobalItem)
  const [password,setPassword]=useState()
  const navigate=useNavigate();


  const verifyLogin=async(e)=>{
    e.preventDefault();
    const add = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:email,password:password}),
    });
    if(add){
      setLogin(false);
    }
    else{
      console.log("wrong data")
    }
  }


  return (
    <div>
      <form onSubmit={verifyLogin}>
        <input type='email' placeholder='type email here' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='type your password here' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button>login</button>
      </form>
      <p onClick={()=>navigate('/signup')}>signup</p>
    </div>

  )
}

export default Login
