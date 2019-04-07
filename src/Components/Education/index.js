import React, { Component } from "react";
import css from '../Education/education.module.css';





const Education = () => {
    return (
      <div className={css.education}>
      <h3>Higher Education </h3>
      <ul className={css.educationlist}>
         
      <li>Professional Certificate in Accounting 2018</li>
      <li>BSc(Hons) Maths and Statistics – First Class  2010</li>
      <li>Certificate in Mathematics  2008</li>
      <li>PGCE in Mathematics - Distinction 2007 </li>
      <li>Certificate in Natural Sciences  2006</li>
      <li>MSc Psychology - Distinction 2006</li>
      <li>BSc(Hons) Psychology - First Class  2001</li>
      <li>Diploma in Spanish (degree equivalent) 1999</li>
      <li>Diploma in Spanish as a Foreign Language 1993</li>
      <li>Certificate TEFLA 1990</li>

      </ul>

      <h3>Experience </h3>
       
      </div>
    );
  };
  
  export default Education;