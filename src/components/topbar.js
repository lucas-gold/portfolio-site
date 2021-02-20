import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class HeaderNav extends Component {
  render() {
    return (

<Navbar sticky="top" bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/"><span class="custname">Lucas Gold</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/cv">Resum&eacute;</Nav.Link>
    </Nav>
    <a href="mailto:lucasgold01@gmail.com" target="_blank" rel="noopener noreferrer">
      <i class="fas fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
    </a>
    <a href="https://github.com/lucas-gold" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
    </a>
  </Navbar.Collapse>
</Navbar>
)
}
}







/*


import React from 'react'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Timeline from './components/timeline'
import About from './components/about'
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)
*/
