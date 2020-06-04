/*
* Landing Page its Like Login Page
*  
*/ 

import React, { Component } from 'react'
import cx from 'classnames'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Rating from 'react-rating'
import CardProductDetail from 'components/CardProductDetail/CardProductDetail'
import {detailProduct} from 'store/actions/Products'

class ProductDetailPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      idFromRoute: '',
    }
  }
  componentWillMount(){
    /* change backgroundColor before render */
    // document.body.style.backgroundColor = '#f5f5f5'
  }
  componentDidMount(){
    const {id} = this.props.location.state
    this.props.detailProduct(id)
  }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.detailData !== this.props.detailData{
  //     console.log()
  //   }
  // }
  render() {
    console.log(this.props)
    const {
      // location,
      // match,
      detailData
    } = this.props
    return (
      <div className={cx("container")}>
        <CardProductDetail data={detailData} />
      </div>
    )
  }
}

export default withRouter(
// export default 
  connect(
    /*
    * import exits reducers from store.store
    */ 
    store=>({
      detailRequest: store.Products.detailRequest,
      detailSuccess: store.Products.detailSuccess,
      detailError: store.Products.detailError,
      detailData: store.Products.detailData,
    }),
    {
      /*
      * import actions from store.actions
      */
      detailProduct,
    },
  )(ProductDetailPage)
)