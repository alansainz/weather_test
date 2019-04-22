import React from 'react';
import ReactDOM from 'react-dom';
import DayCard from './index.jsx';
import { shallow } from 'enzyme';

describe('Daycard Component', () => {
  it('should render with no props', () => {
    const component = shallow(<DayCard />);
    expect(component).toMatchSnapshot();
  });

  it('should render with given props', () => {
    const exampleData = {
      id: 1,
      day: 'Today',
      description: 'test',
      temperature: 23,
    };
    const component = shallow(<DayCard {...exampleData} />);
    expect(component).toMatchSnapshot();
  });
});
