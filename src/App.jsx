import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Note that utils exposes a number of separatly imported files
import { Loader } from './utils'

/**
 * FEATURE: code-splitting
 * Note: splitting with `lazy` only supports components
 * Alternatives:
 * - (components AND libraries) https://www.smooth-code.com/open-source/loadable-components/
 * - (anything but libraries)   https://github.com/jamiebuilds/react-loadable
 */
const Home = lazy(() => new Promise((resolve) => {
  // Setting extra long delay so we see <Loader />
  setTimeout(() => import('./pages/home/Home').then((c) => resolve(c)), 2000)
}))
const Formik = lazy(() => import('./pages/formik/Formik'))
const PureUnpure = lazy(() => import('./pages/pure-unpure/PureUnpure'))

class App extends Component {
  render() {
    return (
      // FEATURE: react-router (uses async rendering for code-splitting)
      // Also see `components/nav`
      <Router>
        <Switch>
          <Suspense fallback={<Loader delay={1000} />}>
            <Route exact path="/" component={Home} />
            <Route path="/formik" component={Formik} />
            <Route path="/pure-unpure" component={PureUnpure} />
          </Suspense>
        </Switch>
      </Router>
    )
  }
}

export default App
