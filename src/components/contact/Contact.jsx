import React, { useRef } from 'react';
import './Contact.css';
import js from '../../assets/js.png'
import c from '../../assets/c++.png';
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import nodejs from '../../assets/nodejs.png'
import github from '../../assets/github.png'
import linkedInIcon from '../../assets/linkedin-icon.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gnhxkvh', 'template_0cvaamh', form.current, {
        publicKey: 'iuRvh_e2CdQHgkGXUpG42',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
          <h1 className="contactPageTitle">My Skills</h1>
          <p className="clientsDesc">
            My skills which i know is these skills
          </p>
          <div className="clientImgs">
            <img src={js} alt="" className="clientImg" />
            <img src={c} alt="" className="clientImg" />
            <img src={react} alt="" className="clientImg" />
            <img src={html} alt="" className="clientImg" />
            <img src={css} alt="" className="clientImg" />
            <img src={nodejs} alt="" className="clientImg" />
          </div>
      </div>
      <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">If anything, Just contact me!!</span>
          <form ref={form} className='contactForm' onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='user_name'/>
            <input type="email" className="email" placeholder='Your Email' name='user_email'/>
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type="submit" value='Send' className="submitBtn">Submit</button>
            <div className="links">
              <img src={linkedInIcon} alt="" className="link" />
              <img src={github} alt="" className="link" />
              
            </div>
          </form>
      </div>
    </section>
  )
}

export default Contact