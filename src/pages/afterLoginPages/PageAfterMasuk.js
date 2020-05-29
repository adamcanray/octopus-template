import React, { Component } from 'react'
import cx from 'classnames'
import {connect} from 'react-redux'
import {logoutAction} from '../../store/actions/Auth'

class PageAfterLogin extends Component {
  constructor(props){
    super(props)
    this.doLogout = this.doLogout.bind(this)
  }
  doLogout(){
    this.props.logoutAction()
  }
  render() {
    console.log(this.props)
    return (
      <div className={cx("container")}>
        okokokok
        <button onClick={this.doLogout}>Keluar</button>
      </div>
    )
  }
}


export default connect(
  /*
  * import exits reducers from store.store
  */ 
  store=>({
    logoutRequest: store.Auth.logoutRequest,
    isAuthenticated: store.Auth.isAuthenticated,
  }),
  {
    /*
    * import actions from store.actions
    */
    logoutAction,
  }
)(PageAfterLogin)