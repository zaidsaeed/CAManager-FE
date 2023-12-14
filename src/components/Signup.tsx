import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Signup.css';
import axios from 'axios';

const ACCOUNT_TYPE_MANAGER = "MANAGER";
const ACCOUNT_TYPE_ATHLETE = "ATHLETE";

const API_URL = "https://camanager.onrender.com";

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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

    const signUp = async (): Promise<void> => {
        const requestBody = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        if (accountType === ACCOUNT_TYPE_ATHLETE) {
            await axios.post(`${API_URL}/api/v1/athletes/`, requestBody, axiosConfig)
                .then(res => {
                    return navigate("/home");
                }).catch(err => {
                    placeErrorOnInputs(err.response.data)
                });
        } else {
            await axios.post(`${API_URL}/api/v1/managers/`, requestBody, axiosConfig)
                .then(res => {
                    return navigate("/home");
                }).catch(err => {
                    placeErrorOnInputs(err.response.data)
                });
        }
    }

    return (
        <div className='su-container'>
            <div className='su-header'>
                <div className='su-text'>Sign Up</div>
                <div className='su-underline'></div>
            </div>

            <div className="su-inputs">
                <div className="su-input">
                    <input className="form-control" type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                </div>

                <div className="su-input">
                    <input className="form-control" type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </div>

                <div className="su-input">
                    <input className="form-control" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>

                <div className="su-input">
                    <input className="form-control" type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
            </div>
            <div className="btn-group su-btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onChange={() => setAccountType(ACCOUNT_TYPE_ATHLETE)} checked={accountType === ACCOUNT_TYPE_ATHLETE}/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Athlete</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onChange={() => setAccountType(ACCOUNT_TYPE_MANAGER)} checked={accountType === ACCOUNT_TYPE_MANAGER}/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Manager</label>
            </div>
            <div className="su-submit-container">
                <button className="su-submit btn btn-lg btn-primary" type="button" onClick={() => signUp()}>Sign up</button>
            </div>
        </div>
    );
};

export default SignUp;