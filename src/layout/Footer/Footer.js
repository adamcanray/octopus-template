import React, {Component} from 'react';
import cx from 'classnames';

class Body extends Component {
  render(){
    return (
      <div className={cx("text-center py-2")}>
        &copy;2020 Octopus Template.
      </div>
    )
  }
}

export default Body