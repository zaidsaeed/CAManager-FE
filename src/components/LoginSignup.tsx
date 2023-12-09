import React, {useState} from 'react';

const LoginSignUp = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='Name'/>
                </div>

                <div className="input">
                    <input type="email" placeholder='Email'/>
                </div>

                <div className="input">
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            <div className="forgot-password">Lost password? <span>Click here.</span></div>
            <div className="submit-container">
                <div className={action === "Sign Up" ? "submit" : "submit gray"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                <div className={action === "Log In" ? "submit" : "submit gray"} onClick={() => setAction("Log In")}>Log in</div>
            </div>
        </div>
      );
}
 
export default LoginSignUp;