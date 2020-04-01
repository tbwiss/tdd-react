import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';
import axios from 'axios';

class StoreLocator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMap: 'none.png',
      shops: []
    }
    this.chooseMap = this.chooseMap.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000/data/shops.json');
    this.setState({ shops: response.data.shops });
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
            this.state.shops.map(shop => (
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