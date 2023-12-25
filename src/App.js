//import logo from './logo.svg';
//import './App.css';
//import { Route, Router } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';

// Define the main component of the application named 'App'
function App() {
  return (
    // use the 'Router' component from 'react-router-dom' to enable routing
    <Router>
      {/* Use the 'Switch' component to render only the first matching route */}
    
        {/* Define a route for the home page, exact ensures an exact match */}
        <Route path="/" element={<Home />} />
        <Route/>
        <Route/>
  
    </Router>
  );
}

export default App;
