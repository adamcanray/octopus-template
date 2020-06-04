import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Flasher from '../../components/Flasher/Flasher'
import Navbar from '../../components/Navbar/Navbar'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'

class Header extends Component {
  render(){
    return (
      <div>
        <Flasher />
        <Navbar />
        {/* <BreadCrumbs /> */}
      </div>
    )
  }
}

export default withRouter(Header)