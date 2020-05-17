import React, {Component} from 'react'
import cx from 'classnames'
import {Link} from 'react-router-dom'

import {ReactComponent as InstagramIcon} from '../../icons/icon-instagram-1.svg'
import {ReactComponent as TwitterIcon} from '../../icons/icon-twitter-1.svg'
import {ReactComponent as FacebookIcon} from '../../icons/icon-facebook-1.svg'

class Flasher extends Component {
  render(){
    return (
      <div className={cx("border-b border-c_gray-4","flex justify-between","px-12 py-4")}>
        <div className={cx("font-normal text-c_text_sz_body")}>
          Dapatkan Aplikasi Aladin
        </div>
        <div className={cx("flex")}>
          <Link to="https://instagram.com/blabla">
            <InstagramIcon className={cx("mx-6")} />
          </Link>
          <Link to="https://twitter.com/blabla">
            <TwitterIcon className={cx("mx-6")} />        
          </Link>
          <Link to="https://facebook.com/blabla">
            <FacebookIcon className={cx("ml-6")} />
          </Link>
        </div>
      </div>
    )
  }
}

export default Flasher