import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './index.js';
import { shallow, mount } from 'enzyme';
import cities from '../../config/cities'
import { render, fireEvent, getByTestId} from "react-testing-library";

const reactMock = require('react');

describe("Dropdown Component", () => {

  xit('should render with no props', () => {
    const component = shallow(<Dropdown />);
    expect(component).toMatchSnapshot();
  });

  xit('should render with given props', () => { 
    const exampleData = {
      options: cities,
      onChange: (value) => console.log(value)
    };
    const component = shallow(<Dropdown {...exampleData} />);
    expect(component).toMatchSnapshot();
  });

  xit('initial state should be 0', () => {
    const exampleData = {
      options: cities,
      onChange: (value) => console.log(value)
    };
    const wrapper = mount(<Dropdown {...exampleData} />)
    expect(wrapper.find('select').props().value).toEqual(0);
  })

  it("should change value when selecting different options", () => {
    const exampleData = {
      options: cities,
      onChange: (value) => console.log(value)
    };
    const { container, rerender } = render(<Dropdown {...exampleData} />);
    const nameValue = getByTestId(container, "select-value");
    const inputName = getByTestId(container, "select-option-Buenos Aires");
    const newName = "3435910";
    fireEvent.change(inputName, { target: { value: newName } });
    expect(nameValue.value).toEqual(newName);
  });
})