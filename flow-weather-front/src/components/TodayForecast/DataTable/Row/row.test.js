import React from 'react';
import ReactDOM from 'react-dom';
import Row from './index.js';
import { shallow } from 'enzyme';

describe('Dropdown Component', () => {
  it('should render with no props', () => {
    const component = shallow(<Row />);
    expect(component).toMatchSnapshot();
  });

  it('should render with given props', () => {
    const exampleData = {
      title: 'Title',
      value: 12,
      symbol: '%',
      isLast: false,
    };
    const component = shallow(<Row {...exampleData} />);
    expect(component).toMatchSnapshot();
  });
});
