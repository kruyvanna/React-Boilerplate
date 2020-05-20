import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import { rootStore } from '../Models/RootStore'

export const UserHeader = observer(() => {
  const { userStore } = rootStore
  const user = userStore.currentUser || {}

  const logout = () => {
    userStore.setIsLoggedIn(false)
    userStore.setCurrentUser({})
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
})
