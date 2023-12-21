import {useState} from 'react';

import LandingPage from "./components/LandingPage";
import LogIn from './components/LogIn';
import  AppContext from "./Context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState({});
  return (
      <AppContext.Provider value={{ user, setUser }} >

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
      </AppContext.Provider>
  );
}

export default App;
