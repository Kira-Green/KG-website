import React, { Component } from "react";
import css from '../Education/education.module.css';


const Education = () => {
    return (

      <div className={css.education}>
      <div className={css.columns}>
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
      </div>
      <div className={css.columns}>

      <h3>Technical Skills    </h3>
      <ul className={css.educationlist}>
          <li>    HTML</li>
          <li>    CSS</li>
          <li>    JavaScript</li>
          <li>    Node.js</li>
          <li>    React.js</li>
          <li>    Express.js</li>
          <li>    GitHub</li>
          <li>    Agile Development</li>
          <li>    ZenHub</li>
          <li>    MongoDB</li>
      </ul>

      </div>
     


      <h3>Experience </h3>
      <p>In December 2018 I decided to leave teaching and take the leap to retrain in Web Development. 
          In February 2019 I started the School of Code bootcamp, learning HTML, CSS, JaveScript, Node, React. 
          There is a strong focus on team work and Agile delivery. </p>
          <br></br>
          <p>From May 1999 to August 2006 I worked for Experian, Nottingham, initially as a Consumer Service Officer before being accepted on their 
          Trainee Programmer scheme and was quickly promoted to Programmer and then Analyst Programmer. 
          The technical skills I developed were COBOL, JCL, SASS. I enjoyed the technical work, but also loved being involved in designing systems 
          and creating system and programme specifications. </p>
          <br />
           <p>

          In September 2006 I trained to teach mathematics and worked as a teacher from July 2007 to December 2018.
           Over this time I took on extra responsibilities as an Assistant Head of House and as Second in Department, which included
            line managing other teachers. I enjoyed planning and organising trips and events for the schools I worked at, 
            which involved liaising with other companies and stakeholders. I often delivered training sessions to other members of staff about using interactive software.
           </p>
       <br />
       <p>From September 1990 to October 1996 I lived near Madrid, Spain, teaching English as a Foreign language in various language schools
            as well as being self-employed for the last two years. While there I became fluent in Spanish and learnt to adapt to different living and working 
            situations. 

</p>
<br />
<p>In November 1996, after returning to England from a period living in Spain I worked for Halifax plc until May 1999, working in branches in 
    Nottingham dealing with customers in all aspects of banking, including Mortgage Arrears Counselling.
     I developed the ability to negotiate and empathise with customers who found themselves in difficult situations 
     while ensuring any arrangements protected the bank’s interests. </p>
      </div>
    );
  };
  
  export default Education;