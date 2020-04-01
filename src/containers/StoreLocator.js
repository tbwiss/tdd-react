import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';

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
    this.chooseMap = this.chooseMap.bind(this);
  }

  chooseMap(event) {
    if (event && event.persist) {
      event.persist();
    }
    this.setState({ currentMap: mapChooser(event.target.value) });
  }

  render () {
    return (
      <>
        <Header/>
        <div>
          {
            this.shops.map(shop => (
              <Button
                handleClick={event => this.chooseMap(event)}
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