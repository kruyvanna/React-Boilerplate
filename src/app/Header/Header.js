import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="navbar is-primary no-print">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
          App
        </NavLink>
        <div className="navbar-burger burger">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <NavLink
            to="/product"
            activeClassName="is-active"
            className="navbar-item"
          >
            PRODUCT
          </NavLink>

          <NavLink
            to="/brand"
            activeClassName="is-active"
            className="navbar-item"
          >
            BRAND
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
