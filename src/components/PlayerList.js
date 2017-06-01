import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

const PlayerList = ({ players, onTodoClick }) => (
  <ul>
    {players.map(player =>
      <Player
        key={player.id}
        {...player}
        onClick={() => onTodoClick(player.id)}
      />
    )}
  </ul>
)

PlayerList.propTypes = {
   players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default PlayerList
