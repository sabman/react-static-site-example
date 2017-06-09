// import React from 'react'
// import styles from './Home.css'
// import common from '../Common.css'
// Object.assign(styles, common)

// import radImg from '../../assets/images/radness.jpg'

// export default class Home extends React.Component {
//   render() {
//     return (
//       <div className={styles.Page}>
//         <h1 className={styles.PageTitle}>Radness Tech Inc.</h1>
//         <div className={styles.PageInner}>
//           <img className={`${styles.Img} ${styles.ImgCenter}`} src={radImg} />
//           <p>Welcome to Radness Tech... An innovative company working on some cool and one might say radical technologies.</p>
//         </div>
//       </div>
//     )
//   }
// }

import '../../main.scss';
import logoImg from '../../assets/images/logo.png';
import backgroundImage from '../../assets/images/hero-bg-01.jpg';

import screenShotLeakageTrends from '../../assets/images/screenshots/app-leakage.png';
// import screenShot from '../../assets/images/screenshots/app-map@2x.png';
// import screenShot from '../../assets/images/screenshots/app@2x.png';
// import screenShot from '../../assets/images/screenshots/dashboard@2x.png';
import screenShotLaptop from '../../assets/images/screenshots/laptop.png';

import React from "react";
import { Link, browserHistory } from "react-router";
import {
  Code,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section 
} from "neal-react";

const brandName = "SpendMapp";
const brand = <span>{brandName}</span>;

const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    Geografia Pty Ltd<br/>
    Suite 1, Level 21 - 15 Collins St <br/>
    VIC 3000, Australia<br/>
    +61 3 9329 9004<br/>
    info@geografia.com.au
  </address>
);


const onSignup = () => {
  browserHistory.push('/request-demo');
}

// source https://www.dropbox.com/s/z43zpd4x9d2aq1a/data_request-LEAKAGE.xlsx?dl=0
const pricingPlan1 = {
  name: "Intro",
  description: "Ideal for gaining a big picture of your council's overall economic health. Provides actionable information on reducing leakage in your council.",
  price: "$410",
  buttonText: "Contact us",
  features: {
    "Overall expenditure volumes in and out of your LGA. Data updates quarterly.": true,
    "Measure seasonal and long-term trends in expenditure.": true,
    "Overall leakage for your LGA. Track changes in leakage over time.": true,
    "Measure impacts before and after events and investments.": true,
    "Compare your LGA leakage with average of all other LGAs.": true,
    "Leakage broken down by category. Find opportunities to attract new investment to serve a large, and growing, local market.": false,
    "Leakage broken down by suburb. Know where your leakage is occuring. ": false
  },
  onClick: onSignup,
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$870",
  name: "+Plus",
  buttonText: "Contact us",
  description: "Gain a monthly understanding your council's economic health across different industries with actionable statisitcs and analysis.",
  features: Object.assign({}, pricingPlan1.features, {
    "Leakage broken down by category. Find opportunities to attract new investment to serve a large, and growing, local market.": true,
  }),
});

const pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$1,550",
  name: "Advantage",
  buttonText: "Contact us",
  description: "Gain fine grained, actionable understanding your council's economic health across different industries, suburbs and LGAs.",
  features: Object.assign({}, pricingPlan2.features, {
    "Leakage broken down by category. Find opportunities to attract new investment to serve a large, and growing, local market.": true,
    "Leakage broken down by suburb. Know where your leakage is occuring. ": true
  }),
});

const pricingPlan4 = Object.assign({}, pricingPlan2, {
  price: "Priced on Agreement",
  name: "Custom",
  buttonText: "Contact us",
  period: "",
  description: "Additional features can be requested. These added features can be bolted on to Standard or Advanced tiers. They will allow the user to understand cause and effect in their economy and work with business communities to influence it.",
  features: {
    "Understanding leakage patterns based on demographics; age, gender, etc": true,
    "Breakdown of spenders by SA1 area - Identify trends based on where people live.": true,
    "Analysis of \"headroom\" - how many more businesses of a certain type can your LGA support.": true,
    "A comprehensive tailored analysis of your economy": true,
    "Tourism event impacts": true,
    "Retail and commercial floorpspace demand": true,
    "GRP impact estimates": true
  },
});


const CurrentNav = () => {
  return(
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top navbar-inverse" style={{backgroundColor: "#121F3A"}}>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        <img src={logoImg} width="30" height="30" className="d-inline-block align-top" alt=""/>
        {brandName}
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
              Features
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/#leakage-trends">Leakage Trends</a>
              <a className="dropdown-item" href="/#industry-trends">Industry Trends</a>
              <a className="dropdown-item" href="/#location-analysis">Location Analysis</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#pricing">Pricing</a>
          </li>            
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdownMenuLink" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
              About
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a href="http://geografia.com.au" className="dropdown-item" target="_blank">Geografia</a>
              <a href="http://geografia.com.au/contact" className="dropdown-item" target="_blank">Contact Us</a>
            </div>
          </li>
        </ul>
        <Link to="/request-demo" className="btn btn-outline-success my-2 my-sm-0 nav-bar-btn">Request Live Demo</Link>
      </div>
    </nav>
  );
}

const FeatureIndustryTrends = () => {
  return(
    <div>
      <h3>Find out which local industries can grow</h3>
      <p>Measure change in the economic activity of residents and visitors to your local government area. Spot expenditure leakage, quantify the impact of different events (good or bad) and measure the long-term trends in expenditure by location and category</p>
    </div>
  );
}

const FeatureLocationAnalysis = () => {
  return(
    <div>
      <h3>Use location analytics to guide decision making</h3>
      <p>Act fast, fix problems, and stop economic loss before it happens.</p>
    </div>
  );
}

const CurrentHero = () => {
  return(
    <Hero backgroundImage={backgroundImage} className="text-xs-center nopad-bottom">
      <div className="hidden-md-down">
        <div className="row">
          <div className="col">
            <h1 className="display-4">{brandName} by <span style={{color:"red"}}>Geografia</span></h1>
          </div>  
        </div>
        
        <div className="row">
          <div className="col-3">
            <p className="lead">
              Monitor the health of your local economy
            </p>

            <p className="lead">
              Act fast, fix problems, and stop economic loss before it happens.
            </p>

            <p>
              <Link to="/request-demo" className="btn btn-white">
                REQUEST A DEMO
              </Link>
            </p>          
          </div>
          <div className="col-9">
            <img src={screenShotLaptop} className="img-fluid" alt="Responsive image"/>
          </div>
        </div>
      </div>

      <div className="hidden-lg-up text-center">
        <div className="row">
          <div className="col">
            <h1 className="display-4">{brandName} by <span style={{color:"red"}}>Geografia</span></h1>
          </div>  
        </div>

        <div className="row">
          <div className="col">
            <img src="img/screenshots/laptop.png" className="img-fluid" alt="Responsive image"/>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <p className="lead">
              Montior the health of your business within your Local Government Area.
            </p>

            <p className="lead">
              Spot expenditure leakage, act fast and fix problems before they happen.
            </p>

            <p>
              <Link to="/request-demo" className="btn btn-white">
                REQUEST A DEMO
              </Link>
            </p>          
          </div>
        </div>
      </div>
    </Hero>
  );
}

const CurrentPricing = () => {
  return(
    <Section id={'pricing'} className="gray">
      <PricingTable>
        <PricingPlan {... pricingPlan1} />
        <PricingPlan {... pricingPlan2} />
        <PricingPlan {... pricingPlan3} />
        <PricingPlan {... pricingPlan4} />
      </PricingTable>
      <footer className="text-center text-muted">All plans are for a minimum of 12 months</footer>
    </Section>    
  );
}


export default (props) => {
  return (
    <Page>

      <CurrentNav/>

      <CurrentHero/>

      <Section className="subhero text-center">
        <hr/>
        <h2>Use banking data and analytics to monitor the spending habits of residents and visitors in your LGA.</h2>
      </Section>

      <div className="hidden-md-down">
        <Section id={'leakage-trends'}>
          <div className="row">
            <div className="col-4"> 
              <h3>Identify trends and act to support local businesses</h3>
              <p>Using banking transaction data, leakage from your LGA can be monitored. This allows you to identify whether you have a growing leakage problem.</p>
            </div>

            <div className="col-8"> 
              <img src={screenShotLeakageTrends} className="img-fluid" alt="Responsive image"/>
            </div>          
          </div>
        </Section>
      </div>

      <div className="hidden-lg-up text-center">
        <Section id={'leakage-trends'}>
          <div className="row">
            <div className="col"> 
              <h3>Identify trends and act to support local businesses</h3>
              <p>Using banking transaction data, leakage from your LGA can be monitored. This allows you to identify whether you have a growing leakage problem.</p>
            </div>
          </div>

          <div className="row">
            <div className="col"> 
              <img src={screenShotLeakageTrends} className="img-fluid" alt="Responsive image"/>
            </div>          
          </div>
        </Section>
      </div>

      <div className="hidden-md-down">
        <Section className="gray" id={'industry-trends'}>
          <div className="row">
            <div className="col-8"> 
              <img src="img/screenshots/app@2x.png" className="img-fluid" alt="Responsive image"/>
            </div>
            <div className="col-4"> 
              <FeatureIndustryTrends/>
            </div>          
          </div>
        </Section>
      </div>

      <div className="hidden-lg-up text-center">
        <Section className="gray" id={'industry-trends'}>
          <div className="row">
            <div className="col"> 
              <FeatureIndustryTrends/>
            </div>          
          </div>
          <div className="row">
            <div className="col"> 
              <img src="img/screenshots/app@2x.png" className="img-fluid" alt="Responsive image"/>
            </div>
          </div>          
        </Section>
      </div>

      <div className="hidden-md-down">
        <Section id={'location-analysis'}>
          <div className="row">
            <div className="col-4"> 
              <FeatureLocationAnalysis/>
            </div>

            <div className="col-8"> 
              <img src="img/screenshots/app-map@2x.png" className="img-fluid" alt="Responsive image"/>
            </div>          
          </div>
        </Section>
      </div>

      <div className="hidden-lg-up text-center">
        <Section id={'location-analysis'}>
          <div className="row">
            <div className="col"> 
              <FeatureLocationAnalysis/>
            </div>
          </div>

          <div className="row">
            <div className="col"> 
              <img className="img-thumbnail" src="img/screenshots/app-map@2x.png" className="img-fluid" alt="Responsive image"/>
            </div>          
          </div>
        </Section>
      </div>

      <CurrentPricing/>

      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com/geografia-au"
        twitterUrl="http://www.twitter.com/geografia-au"
        githubUrl="https://github.com/geografia-au"
        linkedinUrl="https://github.com/geografia-au"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
