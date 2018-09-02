import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

import './QrcodeScanner.css'

class QrScanner extends Component {
  state = {
    delay: 300,
    result: 'No result', 
  }

  handleScan = (data) => {
    if(data){
      this.setState({
        result: data,
      })
    }
  }

  handleError = (err) => {
    console.error(err);
  }

  handleUrlClick = () => {
    // console.log('clicked' + this.state.result);
    const regexp =  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
 
    if (regexp.test(this.state.result)) {
        window.open(this.state.result);
    }
    else {
        alert("Please provide a valid URL");
    }
 
  }

  render(){
    return(
      <div className = "container qr-scanner-container">
        <div className="container">
            <p>Result:&nbsp;  
                <span onClick={this.handleUrlClick} className="btn btn-link" >{this.state.result}</span>
            </p>
        </div>

        <div className = "container qrcode-camera">
            <QrReader delay={this.state.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
              />
        </div>
        
      </div>
    )
  }
}

export default QrScanner;