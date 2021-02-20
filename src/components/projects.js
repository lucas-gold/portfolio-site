import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';


export default class Projects extends Component {

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  render() {
    return (
      <div class="container">
      <br />
            <div className="row">
            <div className="col-md-12">
                <div className="row">
                <div className="col-md-12">
                    <Fade right><h2>My Projects</h2></Fade>
                    <div class="projectgap"></div>
                    <div className="row">
                    <div className="col-md-12">

                        <div className="row">
                        <div className="col-md-12">
                          <Fade left>
                            <p>
                            <Carousel class="carousel" interval="18000" style={{width: "650px", height: "400px", float:"left", margin:"5px 20px 5px 0px"}}>
                            <Carousel.Item>
                              <img width={650} height={400}
                                className="d-block w-100"
                                src="img/842_query1.png"
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/842_query2.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/842_query3.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/842_query4.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/842_query5.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/842_query6.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/842_query7.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/842_query8.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/842_query9.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            </Carousel>
                            <h4 style={{padding:"10% 0 0 0"}}>Custom Search Engine &nbsp;<a href="https://github.com/lucas-gold/search-engine" style={{color:"black"}} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></h4>
                            This project consisted of using Apache Nutch and MongoDB to crawl technology-based websites (i.e. The Verge, Engadget) and store their article's data. The Java program creates an inverted index of all pages crawled and then calculates the weight of each article based on the query terms.
                            <br /><br />
                            <i class="fab fa-java fa-md mr-md-5 mr-3 fa-2x"></i>
                          </p>
                          </Fade>
                        </div>
                        </div>
                    </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="projectgap"></div>
                    <div className="row">
                    <div className="col-md-12">

                        <div className="row">
                        <div className="col-md-12">
                          <Fade right>
                            <p>
                            <Carousel class="carousel" interval="18000" style={{width: "650px", height: "400px", float:"right", margin:"5px 20px 5px 8px"}}>
                            <Carousel.Item>
                              <img width={650} height={400}
                                className="d-block w-100"
                                src="img/cps305_fill_1.png"
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/cps305_fill_2.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img width={650} height={400}
                              className="d-block w-100"
                                src="img/cps305_fill_3.png"
                                alt="Third slide"
                              />
                            </Carousel.Item>

                            </Carousel>
                            <h4 style={{padding:"10% 0 0 0"}}>Word Filler &nbsp;<a href="https://github.com/lucas-gold/word-filler" style={{color:"black"}} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></h4>
                            This Java program takes a string of letters and astericks and must find the greatest possible number of words that can be created by replacing the astericks with any letter in the alphabet.
                            <br /><br />
                            <i class="fab fa-java fa-md mr-md-5 mr-3 fa-2x"></i>
                          </p>
                          </Fade>
                        </div>
                        </div>
                    </div>
                    </div>

                    <br />
                    <br />
            <br />
            <div class="projectgap"></div>
            <div className="row">
            <div className="col-md-12">

                <div className="row">
                <div className="col-md-12">
                  <Fade left>
                    <p>
                    <Carousel class="carousel" interval="18000" style={{width: "650px", height: "400px", float:"left", margin:"5px 20px 5px 0px"}}>
                    <Carousel.Item>
                      <img width={650} height={400}
                        className="d-block w-100"
                        src="img/cps630_ex1.png"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={650} height={400}
                      className="d-block w-100"
                        src="img/cps630_ex2.png"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={650} height={400}
                      className="d-block w-100"
                        src="img/cps630_ex3.png"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={650} height={400}
                      className="d-block w-100"
                        src="img/cps630_ex4.png"
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    </Carousel>
                    <h4 style={{padding:"10% 0 0 0"}}>Trip planning site &nbsp;<a href="https://github.com/lucas-gold/Web-Applications/tree/master/A3" style={{color:"black"}} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></h4>
                    This website contains a database of 20 tourist destinations around the world. The user of the website can search for any phrase
                    using natural English and any attraction with matching characteristics will be displayed. This program was implemented using AngularJS, Bootstrap, MySQL and PHP.


                    <br /><br />
                  <i class="fab fa-angular fa-md mr-md-5 mr-3 fa-2x"></i>
                  <i class="fab fa-html5 fa-md mr-md-5 mr-3 fa-2x"></i>
                  <i class="fab fa-css3-alt fa-md mr-md-5 mr-3 fa-2x"></i>
                  <i class="fab fa-bootstrap fa-md mr-md-5 mr-3 fa-2x"></i>
                  <i class="fab fa-php fa-md mr-md-5 mr-3 fa-2x"></i>
                  </p>
                  </Fade>
                </div>
                </div>
            </div>
            </div>

            <br />
            <br />
            <br />
            <div class="projectgap"></div>

            <div className="row">
            <div className="col-md-12">
                <div className="row">
                <div className="col-md-12">
                <Fade right>
                    <p>
                    <Carousel class="carousel" interval="18000" style={{width: "650px", height: "400px", float:"right", margin:"5px 0px 5px 8px"}}>
                    <Carousel.Item>
                      <img width={650} height={400}
                        className="d-block w-100"
                        src="img/cps305_pack_1.png"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={650} height={400}
                      className="d-block w-100"
                        src="img/cps305_pack_2.png"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={650} height={400}
                      className="d-block w-100"
                        src="img/cps305_pack_3.png"
                        alt="Third slide"
                      />
                    </Carousel.Item>

                    </Carousel>
                    <h4 style={{padding:"10% 0 0 0"}}>Packing words into bins &nbsp;<a href="https://github.com/lucas-gold/word-packer" style={{color:"black"}} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></h4>
                    This program takes a random number of words and sorts them into the smallest possible number of bins
                    based on the condition that no 2 words in the same bin can have a letter in the same spot.
                    <br />
                    <br />
                    <i class="fab fa-java fa-md mr-md-5 mr-3 fa-2x"></i>
                  </p>
                  </Fade>
                </div>
                </div>
            </div>
            </div>


            <br />
            <br />
            <br />
            <div class="projectgap"></div>
            <div className="row">
            <div className="col-md-12">

                <div className="row">
                <div className="col-md-12">
                  <Fade left>
                    <p>
                    <Carousel class="carousel" interval="18000" style={{width: "650px", height: "400px", float:"left", margin:"5px 20px 5px 0px"}}>
                    <Carousel.Item>
                      <img width={650} height={400}
                        className="d-block w-100"
                        src="img/cps109_grocery_2.png"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img width={650} height={400}
                      className="d-block w-100"
                        src="img/cps109_grocery_1.png"
                        alt="second slide"
                      />
                    </Carousel.Item>

                    </Carousel>
                    <h4 style={{padding:"10% 0 0 0"}}>Grocery Point of Sale &nbsp;<a href="https://github.com/lucas-gold/grocery-pos" style={{color:"black"}} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></h4>
                    This Java program emulates a basic point of sale system with a some grocery items built in to test. The program also shows nutrition information for the items in the cart.
                    <br /><br />
                    <i class="fab fa-java fa-md mr-md-5 mr-3 fa-2x"></i>
                  </p>
                  </Fade>
                </div>
                </div>
            </div>
            </div>

            <br />
            <br />
            <br />
            <div class="projectgap"></div>
            <Fade right>
            <p>
            <Carousel class="carousel" interval="18000" style={{width: "650px", height: "400px", float:"right", margin:"5px 0px 5px 0px"}}>
            <Carousel.Item>
              <img width={650} height={400}
                className="d-block w-100"
                src="img/cps506_a2_ex1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
            <img width={650} height={400}
              className="d-block w-100"
                src="img/cps506_a2_ex2.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
            <img width={650} height={400}
              className="d-block w-100"
                src="img/cps506_a2_ex3.png"
                alt="Third slide"
              />
            </Carousel.Item>

            </Carousel>
            <h4 style={{padding:"10% 0 0 0"}}>Finding the optimal bid for each player in Bridge</h4>
            When given a deck with cards 1-52, this program finds each player's most logical bid in a game of 4-player bridge given the cards they've been assigned. It was done for a class project in both Elixir and Rust.
            <div id ="travelsite"></div>
            <br />
            <a href="https://github.com/lucas-gold/bridge-bidding-elixir" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-dark">Elixir &nbsp;<i class="fab fa-github"></i></button></a>
            <a href="https://github.com/lucas-gold/bridge-bidding-rust" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-dark">Rust &nbsp;<i class="fab fa-github"></i></button></a>
            </p>
            </Fade>
        </div>
        </div>
    </div>
    </div>



            <div style={{padding:"5%"}}></div>

            <div onClick={() => this.scrollTop()} style={{textAlign:"center", color:"#89a8c4"}}>
              <i class="fas fa-chevron-up fa-3x"></i>
            </div>


            <div style={{padding:"5%"}}></div>

        </div>

    )
  }
}
