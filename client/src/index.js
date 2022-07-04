import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Navigation from './component/NavBar';
import SignIn from './component/SignIn';
import Salle from './component/Salle'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
  <Navigation />    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      {/*<Route path="/salles/:id" element={<Salle />} />*/}
      <Route path="/salles/" element={<Salle />} />
    </Routes>
  </Router>
  </React.StrictMode>
);


