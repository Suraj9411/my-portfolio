import React from 'react'
import NavbarBtn from '../navbar/NavbarBtn.jsx'
import './LearningLayout.css'

function LearningLayout({videoId,title,date,desc}) {
  console.log("Props received in LearningLayout:", title);
  return (
    <div>
        <NavbarBtn/>
        <div id='learnings'>
            <div className='learningLayoutVideo'>
              <iframe className='learningsVideo' width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" loading='lazy' allowfullscreen></iframe>
            </div>
            <h1 className='learningTitle'>{title}</h1>
            <div className='learningDate'>
              <p>{date}</p>
              <p>{date}</p>
            </div>
            <p className='learningVideoDesc'>{desc}
            </p>

        </div>
    </div>
   
  )
}

export default LearningLayout;