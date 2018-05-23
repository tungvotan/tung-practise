import React from 'react'
import reducer from './index'
describe('test reducers', () => {

  test('show all', () => {
    expect(reducer({
      todos: [
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
      ]
    }, { type: 'SHOW_ALL' })).toEqual({
      todos: [{
        text: 'Test AddTodo',
        completed: false,
        id: 0
      },
      {
        text: 'Test AddTodo',
        completed: true,
        id: 1
      }],
      visibilityFilter: 'SHOW_ALL'
    });
  });

  test('toggle', () => {
    expect(reducer({
      todos: [
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
      ]
    }, { type: 'TOGGLE_TODO', id: 1 })).toEqual({
      todos: [{
        text: 'Test AddTodo',
        completed: false,
        id: 0
      },
      {
        text: 'Test AddTodo',
        completed: false,
        id: 1
      }],
      visibilityFilter: 'SHOW_ALL'
    });
  });
  
  test('show active', () => {
    expect(reducer({
      todos: [
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
      ],
      visibilityFilter: 'SHOW_ACTIVE'
    },  { type: 'SHOW_ACTIVE' })).toEqual({
      todos: [{
        text: 'Test AddTodo',
        completed: false,
        id: 0
      },
      {
        text: 'Test AddTodo',
        completed: true,
        id: 1
      }],
      visibilityFilter: 'SHOW_ACTIVE'
    });
  });
})