import React, {useState} from 'react';
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
        <section>
          <div className='wrapper'>
            <div className="centered">
              <h1>CAManager</h1>
              <p>The number one software for combat athlete management.</p>
              <div className="buttons">
                <button onClick={() => navigate('/login')} type="button" className="btn btn-primary btn-lg" style={{marginRight: "10px"}}>Login</button>
                <button onClick={() => navigate('/signup')} type="button" className="btn btn-primary btn-lg" style={{marginLeft: "15px"}}>Sign up</button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}
 
export default LandingPage;