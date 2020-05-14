import React, {Component} from 'react'
import cx from 'classnames'
import Content from '../../components/Content/Content'

class Body extends Component {
  render(){
    return (
      <div className={cx("flex","min-h-screen")}>
        <Content />
      </div>
    )
  }
}

export default Body