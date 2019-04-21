import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './index.js'
import { shallow } from 'enzyme';
import { Provider } from "react-redux";

describe("Dropdown Component", () => {
  let wrapper;
  const getTodayForecastRequest = jest.fn();
  const getFiveDaysForecastRequest = jest.fn();

  beforeEach(() => {
   wrapper = shallow(
     <Home 
       getTodayForecastRequest={getTodayForecastRequest} 
       getFiveDaysForecastRequest={getFiveDaysForecastRequest}
     />
   );
  });

  it('should call the switchCity function on componentDidMount', () => {
    const spy = jest.spyOn(Home.prototype, 'switchCity');
    wrapper.instance().switchCity();
    expect(spy).toHaveBeenCalled();
  });
  
});

