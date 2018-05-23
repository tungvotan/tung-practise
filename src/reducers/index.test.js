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
  test('show SHOW_COMPLETED', () => {
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
    },  { type: 'SET_VISIBILITY_FILTER' , filter:'SHOW_COMPLETED' })).toEqual({
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
      visibilityFilter: 'SHOW_COMPLETED'
    });
  });
  test('test add', () => {
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
    },  { type: 'ADD_TODO' , text:'test add', id: 2 })).toEqual({
      todos: [{
        text: 'Test AddTodo',
        completed: false,
        id: 0
      },
      {
        text: 'Test AddTodo',
        completed: true,
        id: 1
      },
      {
        text: 'test add',
        completed: false,
        id: 2
      },
    ],
      visibilityFilter: 'SHOW_ALL'
    });
  });
})