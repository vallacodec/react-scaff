import { combineReducers } from 'redux'
import players from './player'
import visibilityFilter from './visibilityFilter'

const playerApp = combineReducers({
  players
})

export default playerApp
