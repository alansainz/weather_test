import React from 'react';
import ReactDOM from 'react-dom';
import FiveDayForecast from './index.jsx';
import { shallow, mount  } from 'enzyme';

import { fiveDayForecast } from '../../utils/tests/mockups.js';

describe("FiveDayForecast Component", () => {
  it('should render with no props', () => {
    const component = shallow(<FiveDayForecast />);
    expect(component).toMatchSnapshot();
  });

  it('should render with given props', () => { 
    const component = shallow(<FiveDayForecast fiveDayForecast={fiveDayForecast} />);
    expect(component).toMatchSnapshot();
  });
})