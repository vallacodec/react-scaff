import React, { Component } from 'react';

class Soccer extends Component {
  // Constructor is responsible for setting up props and setting initial stte
   constructor(props){
       // Pass props to the parent component
       super(props);
       // Set initial state
       this.state = {
           // State needed
           soccerPlayers: []
       };
   }

   componentDidMount(){
       // Static data
       const data = [
           {
               id: 1,
               name: 'Ronaldo',
               year: '2010',
               offer: '$200,000'
           },
           {
               id: 2,
               name: 'Messi',
               year: '2016',
               offer: '$300,000'

           },
           {
               id: 3,
               name: 'Ronaldino',
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
               name: 'Beckham',
               year: '2017',
               price: '$300,890'
           }
       ];
       // Update state
       this.setState({soccerPlayers: data});
   }

   render(){
       // Map through cars and return linked cars
       const soccerNode = this.state.soccerPlayers.map((soccerPlayer) => {
           return (
               <a
                   href="#"
                   className="list-group-item"
                   key={soccerPlayer.id}>
                   {soccerPlayer.name}
               </a>
           )
       });
       return (
           <div>
               <h1>Soccer page</h1>
               <div className="list-group">
                   {soccerNode}
               </div>
           </div>
       );
   }
}

export default Soccer
