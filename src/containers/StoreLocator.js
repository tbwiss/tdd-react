import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

class StoreLocator extends React.Component {
  render () {
    return (
      <>
        <Header/>
        <div>
          <Button location="Portland" />
          <Button location="Astoria" />
        </div>
        <Map />
      </>
    );
  }
}

export default StoreLocator;