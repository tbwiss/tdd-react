import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { location } = this.props;
    const value = location ? location : 'none';
    
    return (
      <button 
        className="location-button"
        onClick={event => this.props.handleClick(event)}
        value={value}
      >
        {location ? location : 'All Locations'}
      </button>
      );
    }
}

export default Button;