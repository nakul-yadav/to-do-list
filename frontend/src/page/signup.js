import React from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate=useNavigate();


  return (
    <div>
       <form method='post' action='http://localhost:4000/api/signup'>
       <input type='name' placeholder='type name here' name='naam'/>
        <input type='email' placeholder='type email here' name='email'/>
        <input type='password' placeholder='type your password here' name='password'/>
        <button onClick={()=>navigate('/login')}>signup</button>
      </form>
      <p onClick={()=>navigate('/login')}>login</p>
    </div>
  )
}

export default Signup
