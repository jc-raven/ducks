import React from 'react'
import { Link } from "react-router-dom"

const Header = ({authState}) => (
    <div style={{display: 'flex', justifyContent: 'flex-end', margin: '5px'}}>
      {
        authState 
          ? <Link to='/' className='button'>Logout</Link>
          : <Link to='/login' className='button'>Login</Link>
      }
    </div>
)

export default Header