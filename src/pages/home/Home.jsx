import React, { Component } from 'react'

import Nav from '../../components/nav/Nav'
import ColorToggle from './ColorToggle'

import logo from '../../assets/logo.svg'
import './Home.css'

export default class extends Component {
  // FEATURE: the new (16.3) react `ref` system
  refTest = React.createRef()

  handleClick = () => {
    this.refTest.current.toggle()
  }

  render () {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">Welcome to my React testing repo</h1>
        </header>

        <Nav frontPage />

        <p>
          This repo features a number of React- and ESNext specific techniques that are
          useful in any project. Search the source for `FEATURE:` to find highlighted thingies.
        </p>

        <ColorToggle ref={this.refTest} />

        <hr />

        <p onClick={this.handleClick} style={{ cursor: 'pointer' }}>
          Clicking toggles color of text above by `ref`.
        </p>
      </div>
    )
  }
}
