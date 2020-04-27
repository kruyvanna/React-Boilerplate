import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { auth } from './Auth/auth'

export const Login = () => {
  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } }

  let login = () => {
    auth.authenticate(() => {
      history.replace(from)
    })
  }
  return <button onClick={login}>Login</button>
}
