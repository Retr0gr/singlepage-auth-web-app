import React from 'react'
import "./login.scss"

function Login() {
  return (
    <div className='container'>
        <div className="formContainer">
            <span className='logo'>Privacy Pulse</span>
            <p className='description'>Welcome to the leading social media
             page in security and account protection</p>
            <span className='title'>Member Login</span>
            <form>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
            </form>
            <p>Don't have an account? Register here</p>
        </div>
        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#" />
    </div>
  )
}

export default Login