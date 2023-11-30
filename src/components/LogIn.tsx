import React, {useState} from 'react';
import './LogIn.css';

const user_icon = require("./Assets/person.png");
const email_icon = require("./Assets/email.png");
const password_icon = require("./Assets/password.png");

const LogIn = () => {

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Log In</div>
                <div className='underline'></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input className="form-control" type="email" placeholder='Email'/>
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input className="form-control" type="password" placeholder='Password'/>
                </div>
            </div>
            <div className="forgot-password">Lost password? <span>Click here.</span></div>
            <div className="not-a-user">Not a User? <span>Sign Up.</span></div>
            <div className="submit-container">
                <button className="submit btn btn-lg btn-primary" type="button">Log In</button>
            </div>
        </div>
      );
}
 
export default LogIn;