import React, { Component } from 'react';
import { QRCode } from 'react-qr-svg';
import './Qrcode.css'

class QrGenerator extends Component {
    state = {
        data: "",
    };

    handleChange = (e) => {
        this.setState({
            data: e.target.value
        })
    }

    render() {
        return (
            <div className="container qr-generator-container">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >>></span>
                    </div>
                    <input className="form-control"
                        type="text" name="payloadBox" 
                        placeholder="Enter your payload here"
                        value={this.state.data}
                        onChange={e => this.handleChange(e)}  
                    />
                </div>

                <div className="container qrcode-pic">
                   <QRCode bgColor="#FFFFFF" fgColor="#000000"
                            level="Q"
                            value= {this.state.data}
                    />
                </div>
            </div>
        );
    }
}

export default QrGenerator;

