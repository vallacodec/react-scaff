const player = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        id: action.id,
        name: action.name,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  };
}

const initialState = [
    {
        id: 1,
        name: 'Jim Carter',
        year: '2010',
        offer: '$200,000'
    },
    {
        id: 2,
        name: 'Samuel Jack',
        year: '2016',
        offer: '$300,000'

    }]

const players = (state = initialState, action) => {
debugger;
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        player(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        player(t, action)
      )
    default:
      return state
  }
}

export default players
