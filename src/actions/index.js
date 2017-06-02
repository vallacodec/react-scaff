let playerCount = 3
export const addPlayer = (name) => ({
type: 'ADD_PLAYER',
  id: playerCount++,
  name:name
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
