import React from 'react';
import './LoginSignup.css';

const user_icon = require("./Assets/person.png");
const email_icon = require("./Assets/email.png");
const password_icon = require("./Assets/password.png");

const LoginSignUp = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
        <div className="forgot_password">Lost password? Click here.</div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Log in</div>
        </div>
        </div>
      );
}
 
export default LoginSignUp;