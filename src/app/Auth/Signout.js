import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { useHistory } from 'react-router-dom'

import { auth } from './auth'

export const Signout = () => {
  let history = useHistory()
  const [user, setUser] = useContext(UserContext)

  let signout = () => {
    setUser(null)
    // auth.signout(() => {
    history.push('/')
    // })
  }

  if (user) {
    return <button onClick={signout}>Signout</button>
  }
  return null
}