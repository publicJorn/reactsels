import React from 'react'

import Nav from '../../components/nav/Nav'

import logo from '../../assets/logo.svg'
import './Home.css'

export default () => (
  <div className="Home">
    <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <h1 className="Home-title">Welcome to my React testing repo</h1>
    </header>

    <Nav frontPage />
  </div>
)
