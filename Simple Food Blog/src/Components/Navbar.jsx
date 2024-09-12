import React from 'react'
import '../styles/navbar.css';

const Navbar = () => {
  return (
   <div className="navbar">
        <h1>Philippines<span>Delicacies</span></h1>
        <div className="navbutton">
            <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#foods">Foods</a></li>
        <li><a href="">Feedback</a></li>
        <li><a href="">About</a></li>


            </ul>
        </div>
    </div>
  )
}

export default Navbar