import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Signup.css';


const email_icon = require("./Assets/email.png");
const password_icon = require("./Assets/password.png");

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='su-container'>
            <div className='su-header'>
                <div className='su-text'>Sign Up</div>
                <div className='su-underline'></div>
            </div>

            <div className="su-inputs">
                <div className="su-input">
                    <img src={email_icon} alt="" />
                    <input className="form-control" type="text" placeholder='First Name' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>

                <div className="su-input">
                    <img src={email_icon} alt="" />
                    <input className="form-control" type="text" placeholder='Last Name' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>

                <div className="su-input">
                    <img src={email_icon} alt="" />
                    <input className="form-control" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>

                <div className="su-input">
                    <img src={password_icon} alt="" />
                    <input className="form-control" type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
            </div>
            <div className="btn-group su-btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={true}/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Athlete</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={true}/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Manager</label>
            </div>
            <div className="su-submit-container">
                <button className="su-submit btn btn-lg btn-primary" type="button">Sign up</button>
            </div>
        </div>
    );
};

export default SignUp;