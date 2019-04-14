import React, { Component } from "react";
import linkedin from "../../Images/linkedin.png"







const Contact = () => {
    return (
      <div className='contact'>
      <a href="https://medium.com/@kira.green" target="_blank" > Find me on medium</a>
      <br />
      <br />


      <a href='https://github.com/Kira-Green' target='_blank'>On GitHub </a>

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