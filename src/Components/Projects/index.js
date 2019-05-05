import React, { Component } from "react";
import css from './projects.module.css'
const Projects = () => {
    return(
<div className={css.projectsPage}>
    <h2>Talent Grid</h2>
    <p>In week 8 of the bootcamp we did a week long project for a major bank working in teams of 4. The project was introduced on day 1, with the rest of that day taken up
        with planning. We only had 3 days of coding and testing as on the Friday we presented our work to the project sponsors.
    </p>
    <p>We had to design and scope our project based on the requirements given to us. During the week we had to re-evaluate and amend our expectations based on what
        was going to be acheivable. 
    </p>

    <p>The front end was a react app that linked to the back end, an express API that linked to a MongoDB Atlas database. User login required authentication, which checked 
        details held in the database and used webtokens. 
    </p>
    <p>Employee details were held in the database and could be fetched, rendered on the Talent Grid, and drag and dropped in areas on the grid. New employees could be added
        to the database.
    </p>
    <p>The team worked together really well and we saw the project as a learning process and focused on making sure all team members were involved in all aspects of the project.</p>
</div>
    )
}
export default Projects