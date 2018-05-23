// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FilterLink from './FilterLink';

const setup = (setupProps = {}) => {
  const store = configureStore()({});
  const wrapper = shallow(<FilterLink filter="SHOW_ALL" store={store} />);

  return {
    store,
    wrapper
  };
};

describe('FilterLink', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('Change filter', () => {
    const { wrapper, store } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.find('Link').simulate('click');
    expect(store.getActions()[0].filter).toEqual('SHOW_ALL');
  });
});
