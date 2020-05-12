import React, { useContext } from 'react'
import { useUser } from '../Context/UserContext'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ children, ...rest }) => {
  const [user] = useUser()

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
