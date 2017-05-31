import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux'
import { addPlayer } from '../actions/cricket'
import PropTypes from 'prop-types';

class Cricket extends Component {
  // Constructor is responsible for setting up props and setting initial stte
   constructor(props){
       // Pass props to the parent component
       super(props);
       // Set initial state
       this.state = {
           // State needed
           cricketPlayers: []
       };
   }

   componentDidMount(){
       // Static data
       const data = [
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

           },
           {
               id: 3,
               name: 'Lara Brian',
               year: '2016',
               offer: '$200,000'
           },
           {
               id: 4,
               name: 'Koli Soul',
               year: '2016',
               offer: '$400,275'
           },
           {
               id: 5,
               name: 'Tom Brady',
               year: '2017',
               price: '$300,890'
           }
       ];
       // Update state
       this.setState({cricketPlayers: data});
   }
   
   handlePlayerAdd(e) {
	event.preventDefault();
	debugger;

   }

   render(){
       const cricNode = this.state.cricketPlayers.map((player) => {
           return (
               <a
                   href="#"
                   className="list-group-item"
                   key={player.id}>
                   {player.name}
               </a>
           )
       });
	   let input
       return (
           <div>
               <h1>Cricket page</h1>
			    <div>
				  <form onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) {
					  return
					}
					
				//	dispatch(addPlayer(input.value))
					input.value = ''
				  }}>
					<input ref={cricNode => {
					  input = cricNode
					}} />
					<button onClick={this.handlePlayerAdd.bind(this)}>
					  Add Player
					</button>
				  </form>
               </div>
               <div className="list-group">
                   {cricNode}
               </div>
           </div>
       );
   }
}
Cricket.contextTypes = {
    store: PropTypes.object
};

export default connect()(Cricket)
