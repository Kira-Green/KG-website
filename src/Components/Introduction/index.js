import React, { Component } from "react";
import css from '../Introduction/introduction.module.css';


const Introduction = () => {
    return (
      <div className="css.introduction">
        
        <p>After many years teaaching maths in secondary schools I decided to take a leap into the unknown, leave teaching and pursue a career in tech. 
            I found the School of Code, applied and got a place on the amazing free course in web development. I have blogged about my experiences on the course on medium. 
           
             <a href="https://medium.com/@kira.green" target="_blank" > You can read about it here</a>
             

             </p>
             <p>I actually worked as a programmer before I went into teaching - but that was before the massive expansion of the internet and related technologies. The programming language I used then was COBOL,  
                 with some JCL and SAS, and my programs were run on the big old IBM mainframe computers. Agile ways of working hadn't started in the workplace then and projects 
                 lasted for months or years.  </p>
<h2>Short biography</h2>
                 <p>I grew up in a small village in South Yorkshire in a large family - four children plus loads of animals. Cats, dogs, chickens, goats, guinea pigs....
                     I loved riding my bike in the countryside, was a bit of a nerd at school and drifted off to Sussex University at 18 to study maths. </p>
                <p>In fact I didn't finish my maths degree at Sussex (but would finish later through the Open University) and worked for Brighton Council for a while before heading 
                         to a small town near Madrid to teach English. I ended up living there for six years.
                 </p>
                 <img src="https://admin.freetour.com/images/tours/4622/medieval-walk-in-alcal%C3%A1-de-henares--04.jpg"
                 alt="view of Alcala de Henares" className="pictures"/>
      </div>
    );
  };
  
  export default Introduction;
  