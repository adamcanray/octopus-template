import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"
// layout
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  // if (!Login.isAuthenticated(localStorage.getItem("token"))) {
  //   dispatch(logoutUser());
  //   localStorage.removeItem("token");
  //   return <Redirect to="/login" />;
  // } else {
    return (
      <Route
        {...rest}
        render={props => React.createElement(component, props)}
      />
    );
  // }
};


class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/app" />} />
            <PrivateRoute
              path="/app"
              dispatch={this.props.dispatch}
              component={Body}
            />
            <Route exact path="*">
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