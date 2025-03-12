import React , { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
        {/* <img src={logo} alt="Logo" className='logo'/> */}
        <h1>SSR</h1>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=> {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contact} alt="" className="desktopMenuImg" />Contact Me
        </button>
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display : showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='learningsSection' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Learnings</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Contact </Link>
        </div>
    </nav>
  )
}

export default Navbar;

