import React from 'react'
import './register.scss'
import Add from "../../assets/addAvatar.png"

function Register() {
  return (
    <div className='container'>
        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#" />
        <div className="formContainer">
            <span className='logo'>Privacy Pulse</span>
            <p className='description'>Welcome to the leading social media
             page in security and account protection</p>
            <span className='title'>Member Register</span>
            <form>
                <input type="text" placeholder='username'/>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt=""/>
                        <span>Add an avatar</span>
                    </label>
                <button>Register</button>
            </form>
            <p>Already have an account? Sign in here</p>
        </div>
        
    </div>
  )
}

export default Register