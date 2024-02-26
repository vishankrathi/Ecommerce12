import React from 'react'
import './Css/Loginsignup.css'
const Loginsignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name"/>
           <input type="text" placeholder="email address" />
           <input type="password" placeholder="passsword"/>
          </div>
          <button>continue</button>
          <p className="loginsignup-login">already have an account?</p>
         <div classname="loginsignup-agree" >
          <input type="checkbox"name='' id='' />
          <p>by Continuing ,i agree to the terms of use & privacy </p></div>
         </div>
      </div>
  )
}
export default Loginsignup;
