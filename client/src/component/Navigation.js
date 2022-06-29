import React from "react";
import { Link } from "react-router-dom";
import '../styles.css'
export default function Navigation() {
    
  return (
      <div className="nav">
          <Link to="/home"><li>Home</li></Link>
          <Link to="/connection"><li>connection</li></Link>
      </div>
  )
}