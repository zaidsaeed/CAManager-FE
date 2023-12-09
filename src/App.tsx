import React from 'react';

import LandingPage from "./components/LandingPage";
import LogIn from './components/LogIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path="/"
            element={<LandingPage/>}
          />
          <Route
            path="/login"
            element={<LogIn/>}
          />
          <Route
            path="/signup"
            element={<Signup/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
