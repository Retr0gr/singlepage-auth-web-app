import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const postLogin = e => {

    e.preventDefault()
    axios.post('//localhost:5000/api/v1/auth/login', 
    {
      email, password
    }).then(res => {localStorage.setItem('id_token',res.data.token);
                    localStorage.setItem('username', res.data.user.name)
                    localStorage.setItem('authenticated', true)})
  }

  return (
    <div className='container'>
        <div className="formContainer">
            <span className='logo'>Privacy Pulse</span>
            <p className='description'>Welcome to the leading social media
             page in security and account protection</p>
            <span className='title'>Member Login</span>
            <form method='post' onSubmit={postLogin}>
                <input type="email" placeholder='email' name='email' onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='password' name='password' onChange={e => setPassword(e.target.value)}/>
                <button>Sign in</button>
            </form>
            <p>Don't have an account? <Link to={"/register"}>Register here</Link></p>
        </div>
        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#" />
    </div>
  )
}

export default Login