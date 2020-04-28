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
      loggedIn: true
    })
    // auth.authenticate(() => {
    history.replace(from)
    // })
  }
  // return <button onClick={login}>Login</button>
  return (
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" class="box">
                <div class="field">
                  <label for="" class="label">
                    Username
                  </label>
                  <div class="control has-icons-left">
                    <input type="text" class="input" required />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">
                    Password
                  </label>
                  <div class="control has-icons-left">
                    <input type="password" class="input" required />
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <button class="button is-success">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
