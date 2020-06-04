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
import Header from 'layout/Header/Header'
import Body from 'layout/Body/Body'
import Footer from 'layout/Footer/Footer'
import LandingPage from 'pages/LandingPage/LandingPage'
import ProductDetailPage from 'pages/ProductDetailPage/ProductDetailPage'
import KategoriDetailPage from 'pages/KategoriDetailPage/KategoriDetailPage'
import Login from 'pages/Login/Login'
import Register from 'pages/Register/Register'
import RegisterVerify from 'pages/Register/RegisterVerify'
import RegisterVerifyCode from 'pages/Register/RegisterVerifyCode'
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword'
import {logoutAction} from 'store/actions/Auth'

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!Login.isAuthenticated(localStorage.getItem("token"))) {
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
    const routes = [
      {
        path: '/',
        component: LandingPage,
      }, 
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      }, 
      {
        path: '/register/verify',
        component: RegisterVerify,
      }, 
      {
        path: '/register/verify/code',
        component: RegisterVerifyCode,
      }, 
      {
        path: '/forgot-password',
        component: ForgotPassword,
      },
      {
        path: '/:kategori',
        component: KategoriDetailPage,
        // routes: {
        //   path: '/:kategori/:produkName',
        //   component: ProductDetailPage
        // }
      },
      {
        path: '/:kategori/:produkName',
        component: ProductDetailPage
      }
    ]
    const routeComponents = routes.map(({path,component},index) => <Route exact path={path} component={component} key={index} />)
    return (
      <div>
        <div className={cx("sticky top-0 z-10","mb-")}>
          <Header />
        </div>
          <Switch>
            <PrivateRoute
              path="/app"
              dispatch={this.props.dispatch}
              component={Body}
            />
            {routeComponents}
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