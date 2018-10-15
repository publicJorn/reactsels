import React from 'react'

import NavLink from './NavLink'

import logo from '../../assets/logo.svg'
import './Nav.css'

export default (props) => {
  const { frontPage = false } = props

  return (
    <nav className="Nav">
      {!frontPage && <img src={logo} className="Nav-Logo" alt="logo" />}

      <ul className="Nav-Items">
        <li className="Nav-Item">
          <NavLink to="/" onlyActiveWhenExact>
            Home
          </NavLink>
        </li>

        <li className="Nav-Item">
          <NavLink to="/formik">Forms with Formik</NavLink>
        </li>

        <li className="Nav-Item">
          <NavLink to="/pure-unpure">Pure or Unpure</NavLink>
        </li>
      </ul>
    </nav>
  )
}
