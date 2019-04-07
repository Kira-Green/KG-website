import React, { Component } from "react";
import Outlaw from '../../Images/outlaw.jpg'



const Hobbies = () => {
    return (
      <div className="css.hobbies">
      <h3>Triathlon and Running</h3>
      <img src={Outlaw} alt='finish line of outlaw 2014'/>
      <p>I have always enjoyed cycling and swimming. In 2001 I started running - I am not naturally athletic but enjoy being out in the fresh air. The first 
        running event I took part in was a Race for Life 5k. Since then I have run several marathons, half marathons and 10ks.
        In 2012 I took part in my first triathlon, met some great friends and started volunteering at events. In 2014 I participated in my first long distance 
        triathlon (2.4 mile swim, 112 miles bike, 26.2 mile run) as part of a relay team.  I have since completed 3 more, all in relay teams.
      </p>

      <h3>Music</h3>
      <p>I play saxophone and am learning the clarinet. I have done a few concerts in the past with the Dukeries Community Band, but teaching started taking
        up too much of my time to continue. Watch this spot for my comeback!
      </p>
       
      </div>
    );
  };
  
  export default Hobbies;