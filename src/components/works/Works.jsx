import React, { useState } from 'react';
import './Works.css';
import work1 from '../../assets/work-1.jpg';
import work2 from '../../assets/work-2.jpg';
import work3 from '../../assets/work-3.png';
import work4 from '../../assets/work-4.jpg';
import work5 from '../../assets/work-5.jpg';
import work6 from '../../assets/work-6.png';
import work7 from '../../assets/work-7.png'; 
import work8 from '../../assets/work-8.png';
// import work9 from '../../assets/work-9.png';

const allProjects = [work1, work2, work3, work4, work5, work6, work7, work8];

const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleProjects = () => {
    setShowAll(!showAll);
  };

  return (
    <section id='works'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="workDesc">I take pride in paying attention to the smallest details.</span>
      
      <div className="worksImgs">
        {allProjects.slice(0, showAll ? allProjects.length : 4).map((work, index) => (
          <img key={index} src={work} alt={`Project ${index + 1}`} className="worksImg" />
        ))}
      </div>

      <button className="worksBtn" onClick={toggleProjects}>
        {showAll ? "Show Less" : "See More"}
      </button>
    </section>
  );
}

export default Works;
