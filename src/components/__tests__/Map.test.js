import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('Map', () => {
  let mountedMap;
  beforeEach(() => {
    const props = {
      location: undefined,
      imageName: 'testmap.png'
    };

    mountedMap = shallow(<Map {...props} />);
  });

  it('renders without crashing', () => {
    shallow(<Map />);
  });

  it('renders a map', () => {
    const img = mountedMap.find('img');
    expect(img.length).toBe(1);
  });

  it('displays the none map when no params are given', () => {
    const props = {
      location: undefined,
      imageName: undefined
    };
    
    const defaultMap = shallow(<Map {...props} />);
    const defaultImg = defaultMap.find('img[src="images/none.png"]');
    expect(defaultImg.length).toBe(1);
  });

  it('displays the map imageName passed to it', () => {
    const testMap = mountedMap.find('img[src="images/testmap.png"]');
    expect(testMap.length).toBe(1);
  });
});
