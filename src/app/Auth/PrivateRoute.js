import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { Route, Redirect } from 'react-router-dom'
import { auth } from './auth'

export const PrivateRoute = ({ children, ...rest }) => {
  const [user] = useContext(UserContext)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          ></Redirect>
        )
      }
    ></Route>
  )
}
