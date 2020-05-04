import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import '../static/App.css'

import FeedingForm from './form'
import Header from './header'
import LoginForm from './login'
import Results from './results'
import Thankyou from './thanks'


const Main = () => (
  <div className='App'>
    <Header/>
    <h3>How do you feed the ducks?</h3>
    <FeedingForm onSubmit={()=> {}} />
  </div>
)

const App = () => {
  const [authState, setAuthState] = useState(false)

  const handleLogin = (state) => {
    setAuthState(state || false)
  }

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginForm onSubmit={handleLogin} />
        </Route>
        <Route path='/admin'>
          {() => authState ? <Results /> : <Redirect to='/login'/>}
        </Route>
        <Route path='/thanks'>
          <Thankyou />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
