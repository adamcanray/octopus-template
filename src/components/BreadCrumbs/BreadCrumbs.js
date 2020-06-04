/*
* BreadCrumbs Custome
* source: https://tailwindcomponents.com/component/breadcrumbs-1
* Note: list must be in order
*
*/

import React, {Component} from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import {Link} from 'react-router-dom'
import CardImage1 from '../../images/product-image-1.jpg'

class BreadCrumbs extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const {
      list
    } = this.props
    console.log(this.props)
    return (
      <div className={cx("px-10 py- bg-blue-")}>
        <nav class="text-black font-bold my-" aria-label="Breadcrumb">
          <ol class="list-none p-0 inline-flex">
            {
              list.map((item,index,arr)=>{
                return index===arr.length-1?(
                  <li class="flex items-center">
                    <span to={item.nav} class="text-gray-500" aria-current="page">{item.name}</span>
                  </li>
                ):(
                  <li class="flex items-center">
                    <Link to={item.nav}>{item.name}</Link>
                    <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                  </li>
                )
              })
            }
          </ol>
        </nav>
      </div>
    )
  }
}

BreadCrumbs.propTypes = {
  list: propTypes.array
}

BreadCrumbs.defaultProps = {
  list: [

  ]
}

export default BreadCrumbs