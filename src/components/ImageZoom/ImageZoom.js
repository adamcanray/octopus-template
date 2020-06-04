import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

const { Component } = React


class ZoomImage extends Component {
  constructor(props){
    super(props)
    this.state = {
      backgroundImage: `url(${props.imgUrl})`,
      backgroundPosition: '0% 0%'
    }
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  render(){
    const {
      imgUrl
    } = this.props
    return(
      <figure 
        className={cx("image-zoom-figure h-full w-full","hover:cursor-crosshair")} 
        onMouseMove={this.handleMouseMove} style={this.state}
      >
        <img className={cx("image-zoom-img h-full w-full object-cover")} src={imgUrl} alt="opt" />
      </figure>
    )
  }
}

ZoomImage.propTypes = {
  imgUrl: propTypes.string.isRequired,
}

ZoomImage.defaultProps = {
  imgUrl: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'
}

export default ZoomImage