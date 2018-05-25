// @flow
import { fetchNasaSuggestion } from 'api';
let nextTodoId = 0

export function addTodo(text: string) {
  return (dispatch: Function) => dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  })
}

export function setVisibilityFilter(filter: string) {
  return (dispatch: Function ) => dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
}

export function toggleTodo(id: number) {
  return (dispatch: Function) => dispatch({
    type: 'TOGGLE_TODO',
    id
  })
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const fetchSuggestion = (value: string) => async (dispatch: Function) => {
  const result = await fetchNasaSuggestion(value);
  dispatch({
    type: 'UPDATE_SUGGESTION',
    payload: result.collection.items
  })
}