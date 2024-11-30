import React from 'react'
import Login from '../page/login'
import Signup from '../page/signup'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to='/login'><button>login</button></Link>
      <Link to='/signup'><button>signup</button></Link>
    </div>
  )
}

export default Header
