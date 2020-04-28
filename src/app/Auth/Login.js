import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { useHistory, useLocation } from 'react-router-dom'

import { auth } from './auth'

export const Login = () => {
  let history = useHistory()
  let location = useLocation()
  const [user, setUser] = useContext(UserContext)

  let { from } = location.state || { from: { pathname: '/' } }
  console.log('from', from)

  let login = () => {
    setUser({
      name: 'Vanna',
      isAuthenticated: true
    })
    // auth.authenticate(() => {
    history.replace(from)
    // })
  }
  return <button onClick={login}>Login</button>
}
