import React, { Component } from 'react';
import brand from '../images/brand_icon.jpg'


// console.log('Inside navbar.js');
// require('dotenv').config()
console.log("Environment");
console.log(process.env);

class MyNavbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href={`/${process.env.REACT_APP_BASE_URI}/`}>
              <img src={brand} width="30" height="30" className="d-inline-block align-top" alt=""/>
            </a>

            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href={`/${process.env.REACT_APP_BASE_URI}/`}>Generator</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/${process.env.REACT_APP_BASE_URI}/scan`}>Scan</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`/${process.env.REACT_APP_BASE_URI}/`}>{`${process.env.REACT_APP_BASE_URI}`}</a>
              </li>
                
            </ul>
     
             
            
          </nav>
        );
    }
}

export default MyNavbar;