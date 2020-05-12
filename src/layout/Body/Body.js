import React, {Component} from 'react';
import cx from 'classnames';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';

class Body extends Component {
  render(){
    return (
      <div className={cx("flex","min-h-screen")}>
        <Sidebar />
        <Content />
      </div>
    )
  }
}

export default Body