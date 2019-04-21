import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from './index.jsx';
import { shallow  } from 'enzyme';

describe("DataTable Component", () => {
  it('should render with no props', () => {
    const component = shallow(<DataTable />);
    expect(component).toMatchSnapshot();
  });

  it('should render with given props', () => { 
    const exampleData = {
      windSpeed: 23, 
      humidity: 1100, 
      pressure: 23, 
      visibility: 2000
    }
    const component = shallow(<DataTable {...exampleData} />);
    expect(component).toMatchSnapshot();
  });
})