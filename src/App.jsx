import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Async from 'react-code-splitting'

// FEATURE: code-splitting
const Home = () => <Async load={import('./pages/home/Home')} />
const Formik = () => <Async load={import('./pages/formik/Formik')} />

class App extends Component {
  render() {
    return (
      // FEATURE: react-router (uses async rendering for code-splitting)
      // Also see `components/nav`
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/formik" component={Formik} />
        </Switch>
      </Router>
    )
  }
}

export default App
