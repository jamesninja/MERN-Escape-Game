import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Navigation from './component/NavBar';
import SignIn from './component/SignIn';
import Room from './component/Room';
import SignUp from './component/SignUp';
import Players from './component/Players';
import FormReservation from './component/FormReservation';
import HistoriqueReserve from './component/HistoriqueReserve';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
  <Navigation />    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/salles/:id" element={<Room />} />
      <Route path="/salles/" element={<Room />} />
      <Route path="/users/" element={<Players />} />
      <Route path="/signup/" element={<SignUp />} />
      <Route path="/bookings/" element={<HistoriqueReserve />}></Route>
      <Route path="/bookings/:id" element={<FormReservation />} />
    </Routes>
  </Router>
  </React.StrictMode>
);


