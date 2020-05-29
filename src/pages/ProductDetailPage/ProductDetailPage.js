/*
* Landing Page its Like Login Page
*  
*/ 

import React, { Component } from 'react'
import cx from 'classnames'
import {Link,Redirect,withRouter} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import config from '../../config'

class ProductDetailPage extends Component {
  // static isAuthenticated(token) {
  //   if (!token) return
  //   const date = new Date().getTime() / 1000
  //   const data = jwt.decode(token)
  //   console.log(token)
  //   console.log(data)
  //   /* allow anyone if config.isBackend still False */
  //   return config.isBackend?date < data.exp:true
  // }
  constructor(props){
    super(props)
    this.state = {
      idFromRoute: '',
    }
  }
  render() {
    // const { from } = this.props.location.state || {
    //   from: { pathname: "/app" }
    // } // eslint-disable-line
    // if (LandingPage.isAuthenticated(localStorage.getItem("token"))) {
    //   return <Redirect to={from} />;
    // }
    console.log(this.props)
    const {
      location,
      match
    } = this.props
    return (
      <div className={cx("container")}>
        Product Detail Page (produk id: <b>{location.state.id}</b>, produk name: <b>{match.params.namaProduk}</b>,query from state route: <b>{location.state.query}</b>)
      </div>
    )
  }
}

export default withRouter(ProductDetailPage)