import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

class StoreLocator extends React.Component {
  constructor(props) {
    super(props);

    this.shops = [
      {
        location: 'Portland',
        address: '123 Portland Dr'
      },
      {
        location: 'Astoria',
        address: '123 Astoria Dr'
      },
      {
        location: '',
        address: ''
      }
    ];

    this.state = {
      currentMap: 'none.png'
    }
  }

  render () {
    return (
      <>
        <Header/>
        <div>
          {
            this.shops.map(shop => (
              <Button
                key={`${shop.location}+${shop.address}`}
                location={shop.location}
              />
            ))
          }
        </div>
        <Map 
          imageName={this.state.currentMap}
        />
      </>
    );
  }
}

export default StoreLocator;