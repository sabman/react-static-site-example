import React from "react";
import {Page, Navbar, NavItem, Hero, Footer} from "neal-react";
import FormSpree from "./FormSpree.jsx";

export default (props) => {
  return(
    <Page>
      <Navbar 
        brand={'SpendMapp'} 
        className="navbar-toggleable-md navbar-inverse fixed-top request-demo-navbar">
      </Navbar>
      <Hero id="hero-request-demo" className="nopad-bottom">
        <div className="row">
          <div className="col">
            <p className="lead">REQUEST A LIVE DEMO</p>
            <h1>SEE THE POWER OF MONITORING ECONOMIC ACTIVITY IN AND BEYOND YOUR LOCAL GOVERNMENT AREA</h1>
            <p className="lead">Geografia's SpendMapp helps costomers monitor and improve the econmonic well being in their Local Government Areas.</p>
          </div>
          <div className="col">
            <FormSpree/>
          </div>
        </div>
      </Hero>
    </Page>
  )
}
