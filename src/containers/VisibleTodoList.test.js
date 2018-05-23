// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import VisibleTodoList from './VisibleTodoList';

const setup = (setupProps = { filter: 'SHOW_ALL' }) => {
  const store = configureStore()({ todos: [
    {
      text: 'Test AddTodo',
      completed: false,
      id: 0
    },
    {
      text: 'Test AddTodo',
      completed: true,
      id: 1
    }
  ], visibilityFilter: setupProps.filter });
  const wrapper = shallow(<VisibleTodoList store={store} />);

  return {
    store,
    wrapper
  };
};

describe('VisibleTodoList', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
  test('renders without crashing', () => {
    const { wrapper } = setup({ filter: 'SHOW_ACTIVE' });
    expect(wrapper).toMatchSnapshot();
  });
  test('renders without crashing', () => {
    const { wrapper } = setup({ filter: 'SHOW_COMPLETED' });
    expect(wrapper).toMatchSnapshot();
  });
  test('renders without crashing', () => {
    const { wrapper } = setup({ filter: 'ERROR_FILTER' });
    expect(wrapper).toThrowError(Error);
  });
});