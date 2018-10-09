import React from 'react'
import { Route, Link } from 'react-router-dom'

export default ({ to, children, onlyActiveWhenExact = false }) => {
  const renderLink = ({ match }) => (
    // Using `match` to set classname
    <Link to={to} className={`Nav-Link${match ? ' --active' : ''}`}>
      {children}
    </Link>
  )

  // FEATURE: react-router; `children` makes function render always
  // `Route` is just a component that renders based on location.path
  return <Route path={to} exact={onlyActiveWhenExact} children={renderLink} />
}
