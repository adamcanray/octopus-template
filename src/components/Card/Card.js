import React, {Component} from 'react';
import cx from 'classnames';

class Card extends Component {
  render(){
    return (
      <div className={cx('bg-red-400')}>
        i am card
      </div>
    )
  }
}

export default Card