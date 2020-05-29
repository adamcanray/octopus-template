/*
* Private Routes
* merender path, path merender component.
* strucure path ex: /<username>/home/kategori
*/

import React, { Component } from 'react'
import cx from 'classnames'
import {withRouter} from 'react-router-dom'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import LandingPage from '../../pages/LandingPage/LandingPage'
import PageAfterMasuk from '../../pages/afterLoginPages/PageAfterMasuk'


class Content extends Component {
  render() {
    return (
      <div className={cx("w-full","")}>
        <Switch>
          <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
          <Route exact path="/app/home" component={PageAfterMasuk} />
          <Route exact path="/app/about" />
          <Route exact path="/app/contact" />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Content)