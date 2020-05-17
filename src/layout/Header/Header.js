import React, {Component} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Flasher from '../../components/Flasher/Flasher'

class Header extends Component {
  render(){
    return (
      <div>
        <Flasher />
        <Navbar />
      </div>
    )
  }
}

export default Header