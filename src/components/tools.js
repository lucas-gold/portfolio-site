import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Fade from 'react-reveal/Fade';

export default class Tools extends Component {
  render() {
    return (
      <div class="container">

                <h3 style={{textAlign:'center'}}>My Programming Experience<br/><br/></h3>
                <Accordion>
                  <Card border="0" style={{'background-color':"#ffffff", 'margin-top':"10px", 'margin-bottom':"20px"}}>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="outline-info" size="lg" eventKey="0" active>
                        <b>Languages</b>
                      </Accordion.Toggle>
                      <span class = "codingbuttons"></span>
                      <Accordion.Toggle as={Button} variant="outline-info" size="lg" eventKey="1" active>
                        <b>Frameworks</b>
                      </Accordion.Toggle>
                      <span class = "codingbuttons"></span>
                      <Accordion.Toggle as={Button} variant="outline-info" size="lg" eventKey="2" active>
                        <b>Databases</b>
                      </Accordion.Toggle>
                      <span class = "codingbuttons"></span>
                      <Accordion.Toggle as={Button} variant="outline-info" size="lg" eventKey="3" active>
                        <b>Tools</b>
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body style={{"background-color":"#F7F7F7"}}>

                      <Fade right cascade >
                      <div className="row row-pt-md align-items-center">
                        <div className="col-md-2 text-center">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "java" src = "img/icons/Java.svg" width={125}></img>
                          <figcaption>Java</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "HTML" src = "img/icons/HTML.svg" width={125}></img>
                          <figcaption>HTML5</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "CSS" src = "img/icons/CSS.svg" width={125}></img>
                          <figcaption>CSS3</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "JavaScript" src = "img/icons/JavaScript.svg" width={125}></img>
                          <figcaption>JavaScript</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "Python" src = "img/icons/Python.svg" width={125}></img>
                          <figcaption>Python</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "PHP" src = "img/icons/php.png" width={125} style={{padding:"28px 0 28px 0"}}></img>
                          <figcaption>PHP</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "SQL" src = "img/icons/sql.svg" width={125}></img>
                          <figcaption>SQL</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "C" src = "img/icons/C.svg" width={125}></img>
                          <figcaption>C</figcaption>
                        </figure>
                        </a>
                        </div>
                      </div>

                      </Fade>
                      </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body style={{"background-color":"#F7F7F7"}}>
                      <Fade right cascade >
                      <div className="row row-pt-md align-items-center">
                        <div className="col-md-2 text-center">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "Angular" src = "img/icons/Angular.svg" width={125}></img>
                          <figcaption>AngularJS</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "React" src = "img/icons/react.svg" width={125}></img>
                          <figcaption>ReactJS</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <a href = "https://www.github.com/lucas-gold/" style={{'text-decoration':"none", color:"inherit"}} target="_blank" rel="noopener noreferrer">
                        <figure class="progicon">
                          <img alt = "Bootstrap" src = "img/icons/Bootstrap.svg" width={125}></img>
                          <figcaption>Bootstrap</figcaption>
                        </figure>
                        </a>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <figure class="progicon">
                          <img alt = "JQuery" src = "img/icons/jquery.png" width={125} style={{padding:"48px 0 48px 0"}}></img>
                          <figcaption>JQuery</figcaption>
                        </figure>
                        </div>
                      </div>

                      </Fade>
                      </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body style={{"background-color":"#F7F7F7"}}>
                      <Fade right cascade>
                      <div className="row row-pt-md align-items-center">
                        <div className="col-md-2 text-center">
                        <figure class="progicon">
                          <img alt = "Oracle" src = "img/icons/oracle-logo.svg" width={125} style={{padding:"38px 0 38px 0"}}></img>
                          <figcaption>Oracle</figcaption>
                        </figure>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <figure class="progicon">
                          <img alt = "MySQL" src = "img/icons/mysql.svg" width={125} style={{padding:"18px 0 18px 0"}}></img>
                          <figcaption>MySQL</figcaption>
                        </figure>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <figure class="progicon">
                          <img alt = "mongodb" src = "img/icons/mongodb.svg" width={125} style={{padding:"18px 0 18px 0"}}></img>
                          <figcaption>MongoDB</figcaption>
                        </figure>
                        </div>
                      </div>

                      </Fade>
                      </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body style={{"background-color":"#F7F7F7"}}>
                      <Fade right cascade>
                      <div className="row row-pt-md align-items-center">
                        <div className="col-md-2 text-center animate-box">
                        <figure class="progicon">
                          <img alt = "Wordpress" src = "img/icons/wordpress.png" width={125} height={125}></img>
                          <figcaption>WordPress</figcaption>
                          </figure>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <figure class="progicon">
                          <img alt = "Firebase" src = "img/icons/Firebase.svg" width={125}></img>
                          <figcaption>Firebase</figcaption>
                        </figure>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <figure class="progicon">
                          <img alt = "PHPMyAdmin" src = "img/icons/phpmyadmin.svg" width={125} style={{padding:"26px 0 26px 0"}}></img>
                          <figcaption>PHPMyAdmin</figcaption>
                        </figure>
                        </div>
                        <div className="col-md-2 text-center animate-box">
                        <figure class="progicon">
                          <img alt = "Photoshop" src = "img/icons/ps.svg" width={125} style={{padding:"26px 0 26px 0"}}></img>
                          <figcaption>Photoshop</figcaption>
                        </figure>
                        </div>
                      </div>

                      </Fade>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
        </div>



    )
  }
}
