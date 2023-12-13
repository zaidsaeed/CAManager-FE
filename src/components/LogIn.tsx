import React, {useState} from 'react';
import './LogIn.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const API_URL = "https://camanager.onrender.com";

const ACCOUNT_TYPE_MANAGER = "MANAGER";
const ACCOUNT_TYPE_ATHLETE = "ATHLETE";

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE_MANAGER);
    const [error, setError] = useState("");

    const placeErrorOnInputs = (errorMessage: string): void => {
        setError(errorMessage);
        const inputs = document.getElementsByClassName("form-control");
        for (var i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            input.classList.add("is-invalid");
        }
    };

    const logIn = async (): Promise<void> => {
        if (accountType === ACCOUNT_TYPE_ATHLETE) {
            await axios.get(`${API_URL}/api/v1/athletes?email=${email}`)
            .then(res => {
                if (res.data.password === password) {
                    return navigate("/home");
                } else {
                    placeErrorOnInputs("Password is incorrect.")
                }
            }).catch(err => {
                placeErrorOnInputs(err.response.data)
            });
        } else {
            await axios.get(`${API_URL}/api/v1/managers?email=${email}`)
                .then(res => {
                    if (res.data.password === password) {
                        return navigate("/home");
                    } else {
                        placeErrorOnInputs("Password is incorrect.")
                    }
                }).catch(err => {
                    placeErrorOnInputs(err.response.data)
                });
        }
    }

    return (
        <div className='login-container'>
            <div className='login-header'>
                <div className='login-header-text'>Log In</div>
                <div className='login-header-underline'></div>
            </div>

            <div className="login-inputs">
                <div className="form-group login-input has-danger">
                    <input className="form-control" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <div className="invalid-feedback">{error}</div>
                </div>

                <div className="form-group login-input has-danger" style={{marginTop: "25px"}}>
                    <input className="form-control" type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <div className="invalid-feedback">{error}</div>
                </div>

                <div className="btn-group login-btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onChange={() => setAccountType(ACCOUNT_TYPE_ATHLETE)} checked={accountType === ACCOUNT_TYPE_ATHLETE}/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">Athlete</label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onChange={() => setAccountType(ACCOUNT_TYPE_MANAGER)} checked={accountType === ACCOUNT_TYPE_MANAGER}/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Manager</label>
                </div>
            </div>
            <div className="login-text">Lost password? <a href="#">Click here.</a></div>
            <div className="login-text">Not a User? <a href="#" onClick={() => navigate("/signup")}>Sign Up.</a></div>
            <div className="login-submit-container">
                <button className="login-submit btn btn-lg btn-primary" type="button" onClick={() => logIn()}>Log In</button>
            </div>
        </div>
      );
}
 
export default LogIn;