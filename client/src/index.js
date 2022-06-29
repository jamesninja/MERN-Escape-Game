import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Navigation from './component/Navigation';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
  <Navigation />    
    <Routes>
      <Route path="/home" element={<Home />} />
      
    </Routes>
  </Router>
  </React.StrictMode>
);


