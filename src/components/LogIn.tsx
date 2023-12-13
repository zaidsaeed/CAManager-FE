import React, {useState} from 'react';
import './LogIn.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const email_icon = require("./Assets/email.png");
const password_icon = require("./Assets/password.png");

const API_URL = "https://camanager.onrender.com";

const ACCOUNT_TYPE_MANAGER = "MANAGER";
const ACCOUNT_TYPE_ATHLETE = "ATHLETE";

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE_MANAGER);
    const [error, setError] = useState("");


    const logIn = async (): Promise<void> => {
        console.log(email);
        console.log(password);
        if (accountType === ACCOUNT_TYPE_ATHLETE) {
            await axios.get(`${API_URL}/api/v1/athletes?email=${email}`)
            .then(res => {
                console.log("res", res);
                if (res.data.password === password) {
                    return navigate("/home");
                } else {
                    setError("Password is incorrect.")
                }
            }).catch(err => {
                console.log("err", err);
            });
        } else {
            await axios.get(`${API_URL}/api/v1/managers?email=${email}`)
                .then(res => {
                    console.log("res", res);
                    return navigate("/home");
                }).catch(err => {
                    console.log("err", err);
                });
        }
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

                <div className="input has-danger">
                    <img src={password_icon} alt="" />
                    <input className="form-control is-invalid" type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <div className="invalid-feedback">Sorry, that username's taken. Try another?</div>
                </div>

                <div className="btn-group su-btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onChange={() => setAccountType(ACCOUNT_TYPE_ATHLETE)} checked={accountType === ACCOUNT_TYPE_ATHLETE}/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">Athlete</label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onChange={() => setAccountType(ACCOUNT_TYPE_MANAGER)} checked={accountType === ACCOUNT_TYPE_MANAGER}/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Manager</label>
                </div>
            </div>
            <div className="login-text">Lost password? <a href="#">Click here.</a></div>
            <div className="login-text">Not a User? <a href="#" onClick={() => navigate("/signup")}>Sign Up.</a></div>
            <div className="submit-container">
                <button className="submit btn btn-lg btn-primary" type="button" onClick={() => logIn()}>Log In</button>
            </div>
        </div>
      );
}
 
export default LogIn;