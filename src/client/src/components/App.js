import React, {useState} from 'react'
import { BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import '../static/App.css'

import FeedingForm from './form'
import LoginForm from './login'
import Results from './results'
import Thankyou from './thanks'

const Header = ({authState}) => (
    <div style={{display: 'flex', justifyContent: 'flex-end', margin: '5px'}}>
      {
        authState 
          ? <Link to='/' className='button'>Logout</Link>
          : <Link to='/login' className='button'>Login</Link>
      }
    </div>
)

const Main = () => (
  <div className="App">
    <Header/>
    <h3>How do you feed the ducks?</h3>
    <FeedingForm onSubmit={()=> {}} />
  </div>
)

const App = () => {
  const [authState, setAuthState] = useState(false)

  const handleLogin = (state) => {
    console.log(`login result!`, state)
    setAuthState(state || false)
  }

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginForm onSubmit={handleLogin} />
        </Route>
        <Route path='/admin'>
          <Results />
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
