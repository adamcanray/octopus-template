/*
* Landing Page its Like Login Page
*  
*/ 

import React, { Component } from 'react'
import cx from 'classnames'
import {withRouter} from 'react-router-dom'

class ProductDetailPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: ''
    }
  }
  componentDidMount(){
    const id = this.props.location.state?this.props.location.state.id:''
    this.setState({id})
  }
  render() {
    console.log(this.props)
    // const {
    //   location,
    //   match
    // } = this.props
    const {
      id
    } = this.state
    return (
      <div className={cx("container")}>
        Kategori Detail Page (kategori id: <b>{id}</b>)
      </div>
    )
  }
}

export default withRouter(ProductDetailPage)