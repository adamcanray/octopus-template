/*
* Card Product
* 
*
*/

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import cx from 'classnames'
import Rating from 'react-rating'
import Truncate from 'react-truncate';
import {ReactComponent as IconLocation} from '../../icons/icon-location-1.svg'
import {ReactComponent as IconStartDim} from '../../icons/icon-star-dim-1.svg'
import {ReactComponent as IconStartShining} from '../../icons/icon-star-shining-1.svg'

class CardNewService extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const {imgUrl,productName,productPrice,productRating,productLocation,button,buttonText,buttonClass,wrapperButtonClass} = this.props
    const Button = (
      <div className={cx(wrapperButtonClass)}>
        <button className={cx(buttonClass)}>{buttonText}</button>
      </div>
    )
    const Card = (
      <div className={cx(
        {"hover:bg-c_gray_5": !button},
        "rounded-lg",
        "overflow-hidden shadow-lg",
        "pb-2 w-40 min-h-full xl:w-48",
        "flex flex-col",
        ""
      )}>
        <div className={cx("h-","overflow-hidden")}>
          <img className={cx("min-w-full+5")} src={imgUrl} alt="product-pict"/>
        </div>
        <div className={cx("px-2")}>
          <div className={cx("leading-tight text-c_text_sz_h_body","font-semibold")}>
            <Truncate lines={2}>
              {productName}
            </Truncate>
          </div>
          <div className={cx("text-c_text_sz_h_small text-c_orange_1","font-bold")}>{productPrice}</div>
          <div className={cx("flex items-center","")}>
            <Rating
              emptySymbol={<IconStartDim href="#icon-star-empty" className={cx("")} />}
              fullSymbol={<IconStartShining href="#icon-star-full" className={cx("")} />}
              initialRating={productRating.rating}
              readonly
            />
            <div className={cx("text-c_text_sz_caption text-c_gray_2","pl-2 ")}>({productRating.totalReview})</div>
          </div>
          <div className={cx("flex")}>
            <div>
              <IconLocation className={cx("mr-1")} />
            </div>
            <div className={cx("text-c_text_sz_caption text-c_green_2")}>
              {productLocation}
            </div>
          </div>
          {
            button ? Button : null
          }
        </div>
      </div>
    )
    
    return (
        <div className={cx("mt-5 mb-6 px-3","")}>
          {
            button ? Card : (
              <Link to='/redirect'>
                {Card}
              </Link>
            )
          }
        </div>
    )
  }
}

CardNewService.propTypes = {
  imgUrl: propTypes.string.isRequired,
  productName: propTypes.string.isRequired,
  productPrice: propTypes.string.isRequired,
  productRating: propTypes.object.isRequired,
  productLocation: propTypes.string.isRequired,
  button: propTypes.bool,
  buttonText: propTypes.string,
  wrapperButtonClass: propTypes.string,
  buttonClass: propTypes.string,
}

CardNewService.defaultProps = {
  buttonText: 'text default',
  wrapperButtonClass: 'pt-2',
  buttonClass: 'min-w-full border border-c_green_2 rounded-lg py-2 font-semibold text-c_text_sz_body hover:bg-c_green_2 hover:text-white'
}

export default CardNewService