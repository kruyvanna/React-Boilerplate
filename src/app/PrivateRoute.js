import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from './Auth/auth'

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated() ? (
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
