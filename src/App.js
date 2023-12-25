//import logo from './logo.svg';
//import './App.css';
//import { Route, Router } from 'react-router-dom';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import App from './App';

import React from 'react';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Forum from './pages/Forum';

// Define the main component of the application named 'App'
function MainApp() {
  return (
    // use the 'Router' component from 'react-router-dom' to enable routing
    
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/courses" element={<Courses />} />
  {/* Add more routes as needed */}
</Routes>

  );
}

export default MainAppApp;
