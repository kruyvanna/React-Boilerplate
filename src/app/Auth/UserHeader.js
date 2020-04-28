import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

import { auth } from './auth'

export const UserHeader = () => {
  const [user, setUser] = useContext(UserContext)

  console.log('user', user)
  if (user) {
    return <div>Logged In</div>
  } else {
    return <div>Sign In</div>
  }
}
