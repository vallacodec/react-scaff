import React from 'react'
import AddPlayer from '../containers/AddPlayer'
import VisiblePlayerList from '../containers/VisiblePlayerList'
import Cricket from './Cricket'

const App = () => (
  <div>
    <AddPlayer />
    <VisiblePlayerList />
    <Cricket/>
  </div>
)

export default App
