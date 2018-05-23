import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Link from './Link';

const setup = (setupProps = {}) => {
  const wrapper = shallow(<Link/>);

  return {
    wrapper
  };
};

describe('Link component', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
