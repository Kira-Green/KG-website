import React, { Component } from "react";
import css from './projectFlip.module.css'
import talentGrid from '../../Images/talentGrid.png'

const Projects = () => {
    return(

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

)
}
export default Projects