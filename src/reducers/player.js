const player = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        id: action.id,
        text: action.playerName,
        completed: false
      }

    default:
      return state
  }
}

const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        player(undefined, action)
      ]
    default:
      return state
  }
}

export default players
