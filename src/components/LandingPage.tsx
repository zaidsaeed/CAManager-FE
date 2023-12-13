import React, {useState} from 'react';
import "./LandingPage.css";

const LandingPage = () => {

    return (
        <React.Fragment>
        <section>
          <div className='wrapper'>
            <div className="centered">
              <h1>CAManager</h1>
              <div className="buttons">
                <button type="button" className="btn btn-primary btn-lg" style={{marginRight: "10px"}}>Login</button>
                <button type="button" className="btn btn-primary btn-lg" style={{marginLeft: "15px"}}>Sign up</button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}
 
export default LandingPage;