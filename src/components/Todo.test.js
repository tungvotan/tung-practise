import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Todo from './Todo';

const setup = (setupProps = {}) => {
  const wrapper = shallow(<Todo/>);

  return {
    wrapper
  };
};

describe('App component', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
