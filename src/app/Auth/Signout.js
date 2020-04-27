import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from './auth'

export const Signout = () => {
  let history = useHistory()

  let signout = () => {
    auth.signout(() => {
      history.push('/')
    })
  }

  console.log('auth', auth)

  if (auth.isAuthenticated()) {
    return <button onClick={signout}>Signout</button>
  }
  return null
}
