import React from 'react'
import '../App.css'

const LoginForm = ({onSubmit}) => {
  return (
    <form style={{display: 'flex', alignItems: 'flex-start' }} onSubmit={onSubmit}>
      <label>username</label>
      <input type='text' />
      <label>password</label>
      <input type='password' />
      <button style={{padding: '7px'}} type='submit'>Submit</button>
    </form>

  )
}

export default LoginForm 