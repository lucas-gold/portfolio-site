import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small stylish-color">
    <div className="footer-copyright text-center py-3">
    <MDBContainer fluid>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-react fa-md white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-bootstrap fa-md white-text mr-md-5 mr-3 fa-2x"> </i>
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" style={{position:'absolute'}}>
          <img alt = "Firebase" src = "img/icons/fb.svg" width={29} ></img>
        </a>
    </MDBContainer>
    </div>
    </MDBFooter>
  );
}

export default FooterPage;
