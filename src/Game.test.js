import React from 'react';
import { shallow, mount } from "enzyme";
import App from './App';
import Game from './Game';

it('renders without crashing', () => {
  shallow(<Game />);
});


it ("should lock the dice for the next roll", function() {
  let wrapper = mount(<Game />);
  let die = wrapper.find('button').first();
  die.simulate("click")
  
  expect(wrapper.state().locked[0]).toBe(true);
});