import React from 'react'
import './App.css'
// import MAPS_URI from './utils/config'

import FeedingForm from './components/feedingForm'

const App = () => {
  return (
    <div className="App">
      <h1>How do you feed the ducks?</h1>
      <FeedingForm onSubmit={()=> {}} />
    </div>
  )
}

export default App;
