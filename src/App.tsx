import React from 'react';

import HomePage from "./components/HomePage";
import LoginSignUp from './components/LoginSignup';
import LogIn from './components/LogIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LogIn/>}
          />
          <Route
            path="/LoginSignUp"
            element={<LoginSignUp/>}
          />
          <Route 
            path="/home"
            element={<HomePage/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
