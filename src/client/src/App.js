import React from 'react'
import { BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import './App.css'

import FeedingForm from './components/feedingForm'
import LoginForm from './components/login'
import Results from './components/feedingResults'

const Header = () => (
    <div style={{display: 'flex', justifyContent: 'flex-end', margin: '5px'}}>
      <Link to='/login' className='App-link'>Login</Link>
      <Link to='/admin' className='App-link'>Admin</Link>
    </div>
)

const Main = () => (
  <div className="App">
    <Header/>
    <h3>How do you feed the ducks?</h3>
    <p className='sub'>Your submission will help scientists to learn more about how ducks eat worldwide</p>
    <FeedingForm onSubmit={()=> {}} />
  </div>
)

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginForm onSubmit={()=>{}} />
        </Route>
        <Route path='/admin'>
          <Results />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
