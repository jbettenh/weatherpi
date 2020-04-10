import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar from "./components/navbar.component"
import CurrentWeather from "./components/CurrentWeather.component";

function App() {
  return (
    <Router>
       <div className="App">
        <Navbar />
        <Route path="/" exact component={CurrentWeather} />
       </div>
    </Router>
  );
}

export default App;
