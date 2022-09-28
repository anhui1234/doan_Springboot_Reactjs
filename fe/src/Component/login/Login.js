import React, { useEffect, useState } from 'react'

import '../login/module.Login.scss'
import { useNavigate } from "react-router-dom"
import { loginUser } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch();
  
  const handleLogin =(e)=>{
    e.preventDefault();
    const newUser ={
      username: username,
      password: password,
    }
    loginUser(newUser,dispatch,navigate)
    
  }
  return (

    <form className='form-login' onSubmit={handleLogin}>
      <h2>Đăng nhập</h2>
      <input type='text' placeholder='Username' className='input1'
        onChange={(e) => setUsername(e.target.value)} />
      <input type='Password' placeholder='Password' className='input2'
        onChange={(e) => setPassword(e.target.value)} />
      <button>Đăng nhập</button>
    </form>

  )

}

export default Login