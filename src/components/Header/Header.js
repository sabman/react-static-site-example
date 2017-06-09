import React from 'react'
import {Link, IndexLink} from 'react-router'
import style from './Header.css'

import logoImg from '../../assets/images/logo.png';
// export default class Header extends React.Component {
//   render() {
//     return (
//       <nav className={style.Header}>
//         <Link to="/"  className={style.Logo}>Radness Tech Inc.</Link>
//       </nav>
//     )
//   }
// }

const brandName = 'SpendMapp';

export default () => {
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