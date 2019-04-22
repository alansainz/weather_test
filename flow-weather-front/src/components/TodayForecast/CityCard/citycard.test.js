import React from 'react';
import ReactDOM from 'react-dom';
import CityCard from './index.jsx';
import { shallow } from 'enzyme';

describe('CityCard Component', () => {
  it('should render with no props', () => {
    const component = shallow(<CityCard />);
    expect(component).toMatchSnapshot();
  });

  it('should render with given props', () => {
    const exampleData = {
      city: 'Buenos Aires',
      temperature: 23,
      description: 'test',
      maxTemp: 23,
      minTemp: 1,
    };
    const component = shallow(<CityCard {...exampleData} />);
    expect(component).toMatchSnapshot();
  });
});
