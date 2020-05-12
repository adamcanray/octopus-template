import React, { Component } from 'react'
import cx from 'classnames';

class Content extends Component {
  render() {
    return (
      <div className={cx("w-3/4","bg-red-500")}>
        i am content
      </div>
    )
  }
}

export default Content