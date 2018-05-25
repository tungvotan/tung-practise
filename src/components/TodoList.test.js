import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoList from './TodoList';

const setup = (setupProps = {}) => {
  const wrapper = shallow(<TodoList todos={[
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
  ]}/>);

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
