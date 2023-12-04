import "bootswatch/dist/litera/bootstrap.min.css";
import React from 'react';
import logo from './logo.svg';
import './App.css';
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
            path="/CAManager-FE"
            element={<LogIn/>}
          />
          <Route
            path="/CAManager-FE/LoginSignUp"
            element={<LoginSignUp/>}
          />
          <Route 
            path="/CAManager-FE/home"
            element={<HomePage/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
