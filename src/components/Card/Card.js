/*
* Card Custome
* 
*
*/

import React, {Component} from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import CardImage1 from '../../images/product-image-1.jpg'

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const {
      /* Default Horizontal Card */ 
      horizontalCard,title,subTitle,buttonText,wrapperClass,mainClass,subMainOneClass,
      titleClass,subTitleClass,subMainTwoClass,buttonClass,
      /* Profile Card */ 
      profileCard,profileImg,profileTitle,profileSubTitle,
    } = this.props
    return (
      <div className={cx("flex justify-center items-center","md:h-58 min-h-full")}>
        {
          horizontalCard?(
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
          ):(
            profileCard?(
              <div className={cx(" leading-tight w-full","p-2 lg:p-6")}>
                <div className={cx("")}>
                  <div className={cx(
                    "flex justify-center items-center ",
                    "py-2"
                  )}>
                    <div className={cx(
                      "flex justify-center items-center ",
                      "w-20 h-20",
                    )}>
                      <img className={cx("w-full h-full rounded-full")} src={profileImg} alt={profileTitle} />
                    </div>
                  </div>
                  <div className={cx(
                    "flex justify-center items-center ",
                    "font-bold c_text_sz_body lg:text-c_text_sz_h_reguler",
                    "py-1"
                  )}>
                    {profileTitle}
                  </div>
                  <div className={cx(
                    "flex justify-center items-center ",
                    "font-semibold text-c_text_sz_body",
                    "pt-2"
                  )}>
                    {profileSubTitle}
                  </div>
                </div>
              </div>
            ):null
          )
        }
      </div>
    )
  }
}

Card.propTypes = {
  /* Default Horizontal Card */
  horizontalCard: propTypes.bool,
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
  /* Profile Card */
  profileCard: propTypes.bool,
  profileImg: propTypes.string,
  profileTitle: propTypes.string,
  profileSubTitle: propTypes.string,
}

Card.defaultProps = {
  /* Default Horizontal Card */ 
  horizontalCard: false,
  title: 'the default title text',
  subTitle: 'the default subtitle text',
  buttonText: 'button text',
  wrapperClass: 'w-full',
  mainClass: 'flex flex-col px-4 py-4',
  subMainOneClass: '',
  titleClass: ' text-c_text_sz_h_2reguler lg:text-c_text_sz_h_large text-c_gray_1 font-bold leading-tight',
  subTitleClass: 'text-c_text_sz_body text-black pt-4 pb-4',
  subMainTwoClass: '',
  buttonClass: 'text-c_text_sz_body text-c_gray_5 bg-c_orange_2 font-semibold rounded-md py-4 px-8',
  /* Profile Card */
  profileCard: false,
  // profileImg: 'https://fakeimg.pl/50x50/00ff00',
  profileImg: CardImage1,
  profileTitle: 'Profile Title',
  profileSubTitle: 'Profile Sub Title', 
}

export default Card