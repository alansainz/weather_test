import React from 'react';
import ReactDOM from 'react-dom';
import { ForecastContainer } from './index.js';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

describe('ForeCast Container', () => {
  let wrapper;
  const getTodayForecastRequest = jest.fn();
  const getFiveDaysForecastRequest = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <ForecastContainer
        getTodayForecastRequest={getTodayForecastRequest}
        getFiveDaysForecastRequest={getFiveDaysForecastRequest}
      />
    );
  });

  it('should render with no props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the getData function on componentDidMount', () => {
    const spy = jest.spyOn(ForecastContainer.prototype, 'getData');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});
