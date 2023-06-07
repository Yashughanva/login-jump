import React from 'react'
import {NavLink} from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
        <h1>Dash Board</h1>
            <NavLink to='/'></NavLink>
        <button>
            <NavLink to='/signup'>Signup</NavLink>
        </button>
        <button>
            <NavLink to='/login'>Login</NavLink>
        </button>
    </div>
  )
}