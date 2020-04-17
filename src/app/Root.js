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

import { PrivateRoute } from './PrivateRoute'
import { PublicPage } from './Public'
import { ProtectedPage } from './Protected'
import { Login } from './Login'

export const Root = () => {
  return (
    <Router>
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
    </Router>
  )
}
