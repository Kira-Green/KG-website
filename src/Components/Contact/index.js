import React, { Component } from "react";
import linkedin from "../../Images/linkedin.png"
import medium from '../../Images/medium.png'
import github from '../../Images/GitHub_Logo.png'







const Contact = () => {
    return (
      <div className='contact'>
      <p>Check out my blog on Medium and my work on GitHub. You can contact me via Linkedin or email.</p>
      <a href="https://medium.com/@kira.green" target="_blank" ><img className ='medium' src= {medium}/></a>
      <br />
      <br />


      <a href='https://github.com/Kira-Green' target='_blank'><img className='github' src={github} /> </a>

      <br/>
      <br />
      
      <a href='https://www.linkedin.com/in/kira-green-70500b92/' target='_blank' ><img src={linkedin} /> </a>
      <br />
      <br />
      <p>Email me: <a href="mailto:kira.green@btinternet.com">kira.green@btinternet.com </a> </p>
             
      </div>
    );
  };
  
  export default Contact;