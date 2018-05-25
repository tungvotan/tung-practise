import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import suggestion from './suggestion';

export default combineReducers({
  todos,
  visibilityFilter,
  suggestion
})
