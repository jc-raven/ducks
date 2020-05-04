import React, {useState} from 'react'
import authService from '../services/auth'
import {useHistory} from 'react-router-dom'

const LoginForm = ({onSubmit}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const history  = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault()
    authService.login(username, password)
      .then((response) => {
        const isAdmin = response.data && response.data.isAdmin
        onSubmit(isAdmin)
        if (isAdmin) {
          history.push('/admin')
        }
      })
      .catch((e) => {
        setErr(`login failed: ${e.message}`)
      })
  }

  return (
  <div>
    <h3 style={{textAlign: 'center'}}>Please login to view duck data</h3>
    <form className='login' onSubmit={handleSubmit}> 
      <ul>
        <li>
          <label>username</label>
          <input type='text' onChange={(e) => setUsername(e.target.value)}/>
        </li>
        <li>
          <label>password</label>
          <input type='password' onChange={(e) => setPassword(e.target.value)} />
        </li>
      </ul>
    <button className='button loginbtn' type='submit'>Login</button>
    </form>
    <p className='error'>{err}</p>
  </div>
  )
}

export default LoginForm 