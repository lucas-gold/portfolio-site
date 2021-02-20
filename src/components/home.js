import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import '../profilestyle.css'

export default class Home extends Component {

  scrollMid() {
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  }


  render() {
    return (

      <div style={{padding:"5%"}}>
      <div class="container">
        <img src="img/me-profile.png" class="profimg" alt="profile"></img>
            <Fade top><h1 style={{paddingTop:"10%", textAlign:"center", color:"#134c87"}}>Lucas Gold<br/><br/></h1>
            <div onClick={() => this.scrollMid()} style={{textAlign:"center", color:"#89a8c4"}}>
              <i class="fas fa-chevron-down fa-3x"></i>
            </div>

            </Fade>
            <div id="a" style={{paddingTop:"20%"}}>
            <Fade bottom>
            <p style={{textAlign:'center', paddingLeft:'15%', paddingRight:'15%'}}><br/>Hi! I am a recent graduate from Ryerson University with a Bachelors of Science in Computer Science. My focus is in software and web development. Please visit my GitHub for some examples of my work!</p>
            </Fade></div>
            <br/><br/>
            <Fade bottom><img src="img/IMG_4004.jpeg" alt="me" style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'30%'}}></img></Fade>



        </div>
        </div>





    )
  }
}
