import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';


export default class Experience extends Component {
  render() {
    return (
      <div style={{padding:"5%"}}>
      <div class="container">
      <Fade bottom>
      <h3 style={{textAlign:'center'}}>Education<br/><br/></h3>

            <h4>Ryerson University<span>&nbsp;&nbsp;2017-2020</span></h4>
            <h6>Honours Bachelor of Science in Computer Science, BSc with Distinction</h6>
            <p>My time at Ryerson consisted of taking courses related to Agile software development, data structures, Java development, programming in C, web development and database management. My final GPA was 3.6/4.0.</p>
      </Fade>
      <Fade bottom>
      <h3 style={{textAlign:'center'}}><br/>Skills</h3>
        <p><ul style={{paddingLeft:'25%'}}><br/>
          <li>Self-driven and motivated programmer</li>
          <li>Works well in teams</li>
          <li>Excellent written and verbal communicator</li>
          <li>Strong attention to detail</li>
          </ul></p></Fade>
      <br/><br/><br/>
      <a href="/lucas_gold_cv.pdf" style={{"text-align":"center", "color":"inherit", "text-decoration":"none"}}><h3 class="resumepdf">View Resum&eacute;  (PDF)</h3></a><br />
      </div>
      </div>
    )
  }
}
