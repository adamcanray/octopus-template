import React, { Component } from 'react'
import cx from 'classnames'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import LandingPage from '../../pages/LandingPage/LandingPage'

// content merender path, path merender component.

class Content extends Component {
  render() {
    return (
      <div className={cx("w-full","")}>
        <Switch>
          <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
          <Route exact path="/app/home" component={LandingPage} />
          <Route exact path="/app/about" />
          <Route exact path="/app/contact" />
        </Switch>
      </div>
    )
  }
}

export default Content