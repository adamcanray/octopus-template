import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// layout
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path="/">
              <Body/>
            </Route>
            <Route path="*">
              <div>
                404
              </div>
            </Route>
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default Layout