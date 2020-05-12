import React, { Component } from 'react'
import cx from 'classnames';

import './Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className={cx("w-1/4","bg-yellow-500")}>
        i am sidebar
      </div>
    )
  }
}

export default Sidebar