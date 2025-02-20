import React from 'react';
import './Intro.css';
import bg from '../../assets/avatar.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <spam className="introName">Suraj Singh Rawat </spam><br />Website Designer</span>
            <p className="introPara">I am a Skilled Web Designer with experience in creating visually <br />appealing and user friendly websites</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className='bg'/>
    </section>
  )
}

export default Intro