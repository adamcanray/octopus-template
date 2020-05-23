/*
* Custom Modal
* 
*
*/

import React, {Component} from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import ReactModal from 'react-modal'

// ReactModal.setAppElement('#root')

class Modal extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const {
      isOpen,
      contentLabel,
      onRequestClose,
      shouldCloseOnOverlayClick,
      height,
    } = this.props
    return (
      <div className={cx("")}>
        <ReactModal 
          isOpen={isOpen}
          contentLabel={contentLabel}
          onRequestClose={onRequestClose}
          shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
          className={cx(
            "absolute bg-white outline-none rounded-lg overflow-auto webkit-overflow-scrolling-touch",
            "pt-10 px-0 pb-4",
            "top-10 bottom-10 left-0 right-0",
            "w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl",
            "mx-auto",
            height
          )}
          overlayClassName={cx("fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25")}
        >
          <div className={cx("w-full max-w-lg mx-auto")}>
            {this.props.children}
          </div>
        </ReactModal>
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: propTypes.bool,
  contentLabel: propTypes.string,
  onRequestClose: propTypes.func,
  shouldCloseOnOverlayClick: propTypes.bool,
  height: propTypes.string,
}

export default Modal