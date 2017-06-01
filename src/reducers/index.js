import { combineReducers } from 'redux'
import players from './players'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  players,
  visibilityFilter
})

export default todoApp
