import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './index.js';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

describe('Home Container', () => {
  it('should call the switchCity method', () => {
    let wrapper;
    const props = {
      getTodayForecastRequest: jest.fn(),
      getFiveDaysForecastRequest: jest.fn(),
    };
    wrapper = shallow(<Home {...props} />);
    const spy = jest.spyOn(Home.prototype, 'switchCity');
    wrapper.instance().switchCity();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the props.getTodayForecastRequest and props.getFiveDaysForecastRequest functions', () => {
    const props = {
      getTodayForecastRequest: jest.fn(),
      getFiveDaysForecastRequest: jest.fn(),
    };
    const component = shallow(<Home {...props} />);
    component.instance().switchCity();
    expect(props.getTodayForecastRequest).toHaveBeenCalled();
    expect(props.getFiveDaysForecastRequest).toHaveBeenCalled();
  });
});
