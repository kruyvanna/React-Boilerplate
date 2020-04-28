import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'

import { PrivateRoute } from './Auth/PrivateRoute'
import { PublicPage } from './Public'
import { ProtectedPage } from './Protected'
import { Login } from './Auth/Login'
import { Signout } from './Auth/Signout'
import { Header } from './Header/Header'
import { UserContextProvider } from './Context/UserContext'

export const Root = () => {
  return (
    <Router>
      <UserContextProvider>
        <Header></Header>
        <Signout></Signout>
        <div>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/public">
            <PublicPage></PublicPage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/protected">
            <ProtectedPage></ProtectedPage>
          </PrivateRoute>
        </Switch>
      </UserContextProvider>
    </Router>
  )
}
