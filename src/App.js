import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom"
import {connect} from 'react-redux'
import cx from 'classnames'
// layout
import Header from './layout/Header/Header'
import Body from './layout/Body/Body'
import Footer from './layout/Footer/Footer'
import LandingPage from './pages/LandingPage/LandingPage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import KategoriDetailPage from './pages/KategoriDetailPage/KategoriDetailPage'
import {logoutAction} from './store/actions/Auth'

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!LandingPage.isAuthenticated(localStorage.getItem("token"))) {
    /*
    * must dipatch logoutAction twice(in App for listen and afterLoginPages for action)
    */ 
    dispatch(logoutAction())
    localStorage.removeItem("token")
    return <Redirect to="/" />
  } else {
    return (
      <Route
        {...rest}
        render={props => React.createElement(component, props)}
      />
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <div className={cx("sticky top-0 z-10")}>
          <Header />
        </div>
          <Switch>
            {/* <Route exact path="/" render={() => <Redirect to="/app" />} /> */}
            <Route exact path="/" component={LandingPage}/>
            <PrivateRoute
              path="/app"
              dispatch={this.props.dispatch}
              component={Body}
            />
            <Route exact path="/:kategori" component={KategoriDetailPage} />
            <Route exact path="/:kategori/:namaProduk" component={ProductDetailPage} />
            <Route exact path="*">
              <div>
                404 page Not Found.
              </div>
            </Route>
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(
  connect(
  /*
    * import exits reducers from store.store
    */ 
   store=>({
    masukRequest: store.Auth.masukRequest,
    isAuthenticated: store.Auth.isAuthenticated,
  }),
)(App))