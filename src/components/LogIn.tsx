import React, {useState} from 'react';
import './LogIn.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const email_icon = require("./Assets/email.png");
const password_icon = require("./Assets/password.png");

const API_URL = "https://camanager.onrender.com";


const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async (): Promise<void> => {
        console.log(email);
        console.log(password);
        await axios.get(`${API_URL}/api/v1/managers?email=${email}`)
            .then(res => {
                console.log("res", res);
                return navigate("/home");
            }).catch(err => {
                console.log("err", err);
            });
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Log In</div>
                <div className='underline'></div>
            </div>

            <div className="inputs">
                <div className="input">
<img src={email_icon} alt="" />
                    <input className="form-control" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>

                <div className="input">
<img src={password_icon} alt="" />
                    <input className="form-control" type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
            </div>
            <div className="login-text">Lost password? <a href="#">Click here.</a></div>
            <div className="login-text">Not a User? <a href="#">Sign Up.</a></div>
            <div className="submit-container">
                <button className="submit btn btn-lg btn-primary" type="button" onClick={() => logIn()}>Log In</button>
            </div>
        </div>
      );
}
 
export default LogIn;