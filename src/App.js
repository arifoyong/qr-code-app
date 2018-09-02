import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import QrGenerator from './components/QrGenerator'
import QrScanner from './components/QrScanner'


import MyNavbar from './components/MyNavbar'
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <MyNavbar />
          <Route exact path="/" component={QrGenerator}/>
          <Route path="/scan" component={QrScanner}/>
      </div>

      </Router>
    );
  }
}

export default App;
