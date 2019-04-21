import React from 'react';
import ReactDOM from 'react-dom';
import TodayForecast from './index.jsx';
import { shallow  } from 'enzyme';

describe("TodayForecast Component", () => {
  it('should render with no props', () => {
    const component = shallow(<TodayForecast />);
    expect(component).toMatchSnapshot();
  });

  it('should render with given props', () => { 
    const todayData = {
      cityCard: {
        city: 'test name',
        description: 'test description',
        temperature: 12,
        maxTemp: 20,
        minTemp: 1,
      },
      dataTable: {
        windSpeed: 1000,
        humidity: 50,
        pressure: 100,
        visibility: 23
      }
    }
    const component = shallow(<TodayForecast {...todayData} />);
    expect(component).toMatchSnapshot();
  });
})