/*
* Card Product
* 
* pass query to page in react-route source: https://github.com/ReactTraining/react-router/issues/4410 
* 
* Note: the Image must Square
*
*/

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import cx from 'classnames'
import Rating from 'react-rating'
import Truncate from 'react-truncate'
import {ReactComponent as IconLocation} from '../../icons/icon-location-1.svg'
import {ReactComponent as IconStartDim} from '../../icons/icon-star-dim-1.svg'
import {ReactComponent as IconStartShining} from '../../icons/icon-star-shining-1.svg'

class CardNewProduct extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    console.log(this.props)
    const {
      /* Card Product */ 
      id,link,imgUrl,imgAlt,productName,productPrice,productRating,productLocation,button,
      buttonText,buttonClass,wrapperButtonClass,className,productDiscount,productPriceAfterDiscount,
      /* Banner */ 
      thisBanner,thisWithBanner,bannerTitle,bannerSubTitle, 
      thisUsePromoBadges,
    } = this.props
    const Button = (
      <div className={cx(wrapperButtonClass)}>
        <button className={cx(buttonClass)}>{buttonText}</button>
      </div>
    )
    const Card = (
      <div className={cx(
        {"hover:bg-c_gray_5": !button},
        "rounded-lg bg-white",
        "overflow-hidden shadow-c_box_shadow_1",
        "flex flex-col",
        "pb-2",
        "min-h-full",
        //"leading-tight",
        {
          "min-h-ful": !thisWithBanner,
          "": thisWithBanner,
        },
        {
          "w-40 xl:w-52": !thisBanner,
          "w-80 xl:w-104 h-full": thisBanner,
        }
      )}>
        <div className={cx(
          "bg-blue-300",
          "overflow-hidden",
          {
            "h-30 xl:h-38 max-h-full relative": !thisBanner,
            "h-48 relative": thisBanner
          }
        )}>
          {
            thisBanner?(
              <div>
                <div className={cx("w-full h-full absolute flex content-between flex-wrap p-4")}>
                  <div className={cx(" w-full font-semibold text-c_text_sz_h_2large text-c_gray_5")}>
                    <div>Special Furniture</div>
                  </div>
                  <div className={cx("w-full text-right font-bold text-c_text_sz_h_2reguler text-c_gray_5")}>
                    <div>Dics Up To 25%</div>
                  </div>
                </div>
                <img className={cx("w-full min-h-full")} src={imgUrl} alt={imgAlt}/>
              </div>
            ):(
              thisUsePromoBadges?(
                <div className={cx("w-full h-full")}>
                  <div className={cx("w-full absolute flex justify-end")}>
                    <div className={cx(
                      "bg-c_blue_3 text-c_text_sz_body text-c_gray_5",
                      "px-6",
                      "rounded-bl-lg"
                    )}>
                      <div>Promo</div>
                    </div>
                  </div>
                  <img className={cx("w-full min-h-full")} src={imgUrl} alt={imgAlt}/>
                </div>
              ):(
                <img className={cx("w-full min-h-full")} src={imgUrl} alt={imgAlt}/>
              )
            )
          }
        </div>
        {
          thisBanner?(
            <div className={cx("px-2 py-4")}>
              <div className={cx("font-bold text-c_text_sz_h_large")}>{bannerTitle}</div>
              <div className={cx("font-semibold text-c_text_sz_h_reguler")}>{bannerSubTitle}</div>
            </div>
          ):(
            <div className={cx("px-2")}>
              <div className={cx("leading-tight text-c_text_sz_body","font-semibold")}>
                <Truncate lines={2}>
                  {productName}
                </Truncate>
              </div>
              <div className={cx(
                {
                "text-c_text_sz_h_small text-c_orange_1": !productDiscount,
                "font-bold": !productDiscount,
                "text-c_text_sz_body text-c_gray_3": productDiscount,
                "font-semibold": productDiscount,
                "line-through": productDiscount,
                }
              )}>{productPrice}</div>
              <div className={cx(
                "text-c_text_sz_h_small text-c_orange_1",
                "font-bold",
                "leading-tight",
                {
                  "hidden": !productDiscount
                }
              )}>
                <Truncate lines={1}>
                  {productPriceAfterDiscount}
                </Truncate>
              </div>
              {
                productRating?(
                  productRating.rating&&productRating.totalReview?(
                    <div className={cx("flex items-center","leading-tight")}>
                      <Rating
                        emptySymbol={<IconStartDim href="#icon-star-empty" className={cx("")} />}
                        fullSymbol={<IconStartShining href="#icon-star-full" className={cx("")} />}
                        initialRating={productRating.rating}
                        readonly
                      />
                      <div className={cx("text-c_text_sz_caption text-c_gray_2","pl-2 ")}>({productRating.totalReview})</div>
                    </div>
                  ) : null
                ) : null
              }
              {
                productLocation?(
                  <div className={cx("flex")}>
                    <div>
                      <IconLocation className={cx("mr-1")} />
                    </div>
                    <div className={cx("text-c_text_sz_caption text-c_green_2")}>
                      {productLocation}
                    </div>
                  </div>
                ):null
              }
              {
                button ? Button : null
              }
            </div>
          )
        }
      </div>
    )
    return (
        <div className={cx(
          "mt-5 mb-6",
          className
        )}>
          {
            button ? Card : (
              <Link to={{pathname:`${link}`,state:{id:id}}}>
                {Card}
              </Link>
            )
          }
        </div>
    )
  }
}

CardNewProduct.propTypes = {
  id: propTypes.number,
  // Product Card
  link: propTypes.string,
  imgUrl: propTypes.string,
  imgAlt: propTypes.string,
  productName: propTypes.string,
  productPrice: propTypes.string,
  productRating: propTypes.object,
  productLocation: propTypes.string,
  button: propTypes.bool,
  buttonText: propTypes.string,
  wrapperButtonClass: propTypes.string,
  buttonClass: propTypes.string,
  className: propTypes.string,
  productDiscount: propTypes.bool,
  productPriceAfterDiscount: propTypes.string,
  /* Banner */ 
  thisBanner: propTypes.bool,
  thisWithBanner: propTypes.bool,
  bannerTitle: propTypes.string,
  bannerSubTitle: propTypes.string,
  thisUsePromoBadges: propTypes.bool,
}

CardNewProduct.defaultProps = {
  /* Product Card */
  link: '/redirect/',
  buttonText: 'text default',
  wrapperButtonClass: 'pt-2',
  buttonClass: 'min-w-full border border-c_green_2 rounded-lg py-2 font-semibold text-c_text_sz_body hover:bg-c_green_2 hover:text-white',
  /* Banner */
  thisBanner: false,
  thisWithBanner: false,
  thisUsePromoBadges: false,
}

export default CardNewProduct