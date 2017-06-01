import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../actions/cricket'

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
        // State needed
        cricketPlayers: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(input) {
    debugger;
    this.props.dispatch(addPlayer(input))
    let data =[{
        id: 6,
        name: 'Sam Brady',
        year: '2017',
        price: '$300,890'
    }]
    this.setState({cricketPlayers: data});
    debugger;
  }

  render() {
    let value;
    let input;
    return (
      <div>
  <form onSubmit={e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    value = input.value;
    this.handleClick(input.value)
    input.value = ''
  }}>
    <input ref={node => {
      input = node
    }} />
    <button type="submit">
      Add Todo
    </button>
  </form>
</div>
    )
  }
}

// In addition to the state, `connect` puts `dispatch` in our props.
export default connect()(Button)
