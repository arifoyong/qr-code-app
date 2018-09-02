import React, { Component } from 'react';

class Icon extends Component {
    render() {
        return (
            <svg viewBox="0 0 120 120">
            {/* the shapes making the spinner */}
            <circle r={40}
                    cx = {60}
                    cy = {60}
                    >
            </circle>
            </svg>
        );
    }
}

export default Icon;