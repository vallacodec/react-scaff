let playerCount = 0
export const addPlayer = (playerName) => ({
  type: 'ADD_PLAYER',
  id: playerCount++,
  playerName
})

export const removePlayer = (playerName) => ({
  type: 'REMOVE_PLAYER',
  id: playerCount--,
  playerName
})
