import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddTodo from './AddTodo';
import configureStore from 'redux-mock-store';

const setup = (setupProps: {}) => {
  const store = configureStore()({ todos: [] });
  const wrapper = shallow(<AddTodo store={store} />);

  return {
    store,
    wrapper
  };
}

describe('AddTodo test', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('handle Submit', () => {
    const { wrapper, store } = setup();
    const instance = wrapper.dive().instance()
    let preventDefault = jest.fn();
    instance.state.value = 'Test add todo'
    instance.handleSubmit({ preventDefault });
    expect(store.getActions()).toEqual([
      { id: 0, text: 'Test add todo', type: 'ADD_TODO' }
    ]);
    expect(instance.state.value).toEqual('')
  })
  
  test('handleInputChange', () => {
    const { wrapper } = setup();
    const instance = wrapper.dive().instance()
    instance.handleInputChange({ target:{ value: 'handle change' } })
    expect(instance.state.value).toEqual('handle change')
  })
})