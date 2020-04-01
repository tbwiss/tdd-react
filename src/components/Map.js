import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  render() {
    const { imageName } = this.props;
    const imgPath = `images/${imageName ? imageName : 'none.png'}`;

    return (
      <div className="MapBox">
        <img 
          src={imgPath}
          alt="the map"
        />
      </div>
    );
  }
}

export default Map;