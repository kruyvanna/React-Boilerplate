import React, { useContext } from 'react'
import { useUser } from '../Context/UserContext'
import { NavLink } from 'react-router-dom'

export const UserHeader = () => {
  const [user, setUser] = useUser()

  const logout = () => {
    setUser({
      loggedIn: false
    })
  }

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <NavLink
        to={'/user/' + user.id}
        className="navbar-item"
        activeClassName="is-active"
      >
        {user.name}
      </NavLink>
      <div className="navbar-dropdown">
        <a className="navbar-item" onClick={logout}>
          LOG OUT
        </a>
      </div>
    </div>
  )
}
