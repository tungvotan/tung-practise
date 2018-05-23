import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

const setup = (setupProps = {}) => {
  const wrapper = shallow(<App/>);

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
