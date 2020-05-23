/*
* Card New Service
* 
*
*/

import React, {Component} from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

class CardNewService extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const {title,subTitle,buttonText,bgClass} = this.props
    return (
      <div className={cx("mt-5 px-3","w-full sm:w-full md:w-1/3")}>
        <div className={cx(bgClass,"rounded-xl"," overflow-hidden shadow-lg")}>
          <div className={cx("px-6 py-4")}>
            <div className={cx("text-c_text_sz_h_large","text-white font-bold mb-2")}>{title}</div>
            <p className={cx("text-c_text_sz_body","text-white font-semibold")}>{subTitle}</p>
          </div>
          <div className={cx("px-4 py-4 text-right")}>
            <button className={cx("hover:bg-c_gray_5","bg-white rounded-lg px-5 py-2 text-sm font-semibold")}>{buttonText}</button>
          </div>
        </div>
      </div>
    )
  }
}

CardNewService.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string,
  buttonText: propTypes.string,
  bgClass: propTypes.string
}

export default CardNewService