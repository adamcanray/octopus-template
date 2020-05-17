/*
* Slider Images
*
* Slider images size rule(so that the size is no different):
* - height must 300px, width must 600px.
*   or just multiply Height by 2, the result is Width.
*
* desc: height 300px when the slide is current, if slide not current then 200px.
*       //so when height is 200px, we just resize the wrap. the image scale is constantly.
* 
*/

import React, {Component} from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'
import SliderWrapper from "./_SlickSliderStyle"

class SliderComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      dotsCurrentIndex: 0,
    }
  }
  render(){
    console.log(this.props.images)
    console.log(this.state)
    const {images} = this.props
    const settings = {
      centerMode: true,
      // centerPadding: '300px',
      centerPadding: '25%',
      className: 'mt-12',
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      speed: 500,
      arrows: false,
      // adaptiveHeight: true,
      appendDots: dots => <ul>{dots}</ul>,
      customPaging: i => (
        <div className="ft-slick__dots--custom">
          <div className="loading" />
        </div>
      ),
      responsive: [
        /*
        * Screen Sizes
        * xl - lg - md - sm
        * based on themes.screens in tailwind.config.js
        * 
        */
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            // centerPadding: '20%',
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            // centerPadding: '50px',
          }
        },
        {
          breakpoint: 768,
          settings: 'unslick'
        },
        // {
        //   breakpoint: 640,
        //   settings: 'unslick'
        // }
      ]
    };
    return (
      <div className={cx("","")}>
        <SliderWrapper>
          <Slider {...settings}>
            {
              images.map((item,index) => {
                return (
                  <div key={index} className={cx(
                    "c_slide_wrap_default xl:c_slide_wrap_xl lg:c_slide_wrap_lg md:c_slide_wrap_md sm:c_slide_wrap_sm",
                    "focus:outline-none",
                    "relative",
                    "pb-4 md:pb-0"
                  )}>
                    <div className={cx("absolute","top-6 right-10")}>
                      <div className={cx("text-c_gray_5","text-c_text_sz_h_reguler font-bold")}>{item.title}</div>
                      <div className={cx("text-c_gray_5","text-c_text_sz_body font-semibold")}>{item.subTitle}</div>
                    </div>
                    <img key={index} alt="img" className={cx("","rounded-lg")} src={item.url} />
                  </div>
                )
              })
            }
          </Slider>
        </SliderWrapper>
      </div>
    )
  }
}

SliderComponent.propTypes = {
  images: propTypes.array.isRequired,
}

export default SliderComponent