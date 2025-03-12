import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.jpg';
import WebDesign from '../../assets/website-design.jpg';
import AppDesign from '../../assets/app-design.jpg';


const Skills = () => {
  return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in web developement</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Crafting intuitive and engaging user experiences with a focus on aesthetics and usability.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Desiging</h2>
                        <p>Building visually stunning and fully responsive websites tailored for seamless user interaction.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Designing modern and user-friendly mobile apps that enhance digital experiences.</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Skills