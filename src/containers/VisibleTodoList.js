// @flow

import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList';
import type { TodosProps, State } from '../types';

const getVisibleTodos = (todos: TodosProps, filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: State) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList)