import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import HeaderNav from './components/topbar'
import Home from './components/home'
import Projects from './components/projects'
import Experience from './components/experience'
import Footer from './components/footer'
import Tools from './components/tools'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (

      <Router>
              <Switch>
                <Route path="/projects">
                    <HeaderNav />
                    <Projects />
                    <Footer />
                </Route>

                <Route path="/cv">
                    <HeaderNav />
                    <Experience />
                    <Tools />
                    <Footer />
                </Route>

                <Route path="/">
                    <HeaderNav />
                	  <Home />
                    <Tools />
                    <Footer />
                </Route>


              </Switch>
          </Router>

    );
  }
}

export default App;




//headernav should have link to github, links to timeline, projects
    //search bar: search by coding language or by year

//timeline should be own page -> leads to pdf resume download
//projects should be own page
