import React from 'react';
import './NavbarBtn.css';
import { Link } from 'react-router-dom';

function NavbarBtn() {
  return (
    <nav className="navbar">
            <h1>SSR</h1>
            <Link to="/"><button className='homeBtn'>Home</button></Link>
    </nav>
  )
}

export default NavbarBtn;