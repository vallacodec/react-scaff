import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import PlayerList from '../components/PlayerList'
import Cricket from '../components/Cricket'

const getPlayers = (players, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return players
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  players: getPlayers(state.players, 'SHOW_ALL')
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisiblePlayerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)

export default VisiblePlayerList
