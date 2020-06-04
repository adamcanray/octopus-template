/*
* Custom Modal
* 
*
*/

import React, {Component} from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'

class PageWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const {
      className,
      breadcrumbs
    } = this.props
    return (
      <div className={cx(className,"pb-8 pt-8")}>
        {
          breadcrumbs.length?(
            <BreadCrumbs list={breadcrumbs} />
          ):null
        }
        {this.props.children}
      </div>
    )
  }
}

PageWrapper.propTypes = {
  className: propTypes.string,
  breadcrumbs: propTypes.array,
}
PageWrapper.defaultProps = {
  className: 'bg-white',
  breadcrumbs: [],
}

export default PageWrapper