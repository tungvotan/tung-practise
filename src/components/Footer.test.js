import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';

const setup = (setupProps = {}) => {
  const wrapper = shallow(<Footer/>);

  return {
    wrapper
  };
};

describe('Footer component', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
