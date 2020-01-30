import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
  NavigationBar,
  Layout,
  Jumbotron,
  Home,
  About,
  Contact,
  NotFound,
} from './components'

function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Fragment>
  )
}

export default App
