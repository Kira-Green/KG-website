import React, { Component } from "react";
import css from './projectFlip.module.css'
import talentGrid from '../../Images/talentGrid.png'
import weoley from '../../Images/rsz_weoley.png'

const Projects = () => {
    return(
<>
<div className={css.container}>
<div className={css.flipCard}>
  <div className={css.flipCardInner}>
    <div className={css.flipCardFront}>
      <img src={talentGrid} alt="Talent grid" className={css.cardImage} />
    </div>
    <div className={css.flipCardBack}>
      <h1>Talent Grid</h1> 
    <p>A week long project for a major bank working in teams of 4. </p>
    <p>Front end : React </p>
     <p> Back end: Express API </p>
     <p> Database: MongoDB </p>
    
    </div>
  </div>
</div>
</div>

 
 <div className={css.container}>
<div className={css.flipCard}>
  <div className={css.flipCardInner}>
    <div className={css.flipCardFront}>
      <img src={weoley} alt="Weoley Castle app" className={css.cardImageWeoley} />
    </div>
    <div className={css.flipCardBack}>
      <h1>The Weoley Experience app</h1> 
    <p>A  4 week project for a local castle working in teams of 4. </p>
    <p> AR and VR experience</p>
    <p>React Native and Viro React </p>
     
    </div>
  </div>
</div>
</div>
</>
)
}
export default Projects