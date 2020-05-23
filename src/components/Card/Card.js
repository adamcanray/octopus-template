/*
* Card Custome
* 
*
*/

import React, {Component} from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const {
      title,subTitle,buttonText,
      wrapperClass,mainClass,subMainOneClass,
      titleClass,subTitleClass,subMainTwoClass,
      buttonClass
    } = this.props
    return (
      <div className={cx(wrapperClass)}>
        <div className={cx(mainClass)}>
          <div className={cx(subMainOneClass)}>
            <div className={cx(titleClass)}>{title}</div>
            <p className={cx(subTitleClass)}>{subTitle}</p>
          </div>
          <div className={cx(subMainTwoClass)}>
            <button className={cx(buttonClass)}>{buttonText}</button>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  title: propTypes.string,
  subTitle: propTypes.string,
  buttonText: propTypes.string,
  wrapperClass: propTypes.string,
  mainClass: propTypes.string,
  subMainOneClass: propTypes.string,
  titleClass: propTypes.string,
  subTitleClass: propTypes.string,
  subMainTwoClass: propTypes.string,
  buttonClass: propTypes.string,
}

export default Card