import React, { Component } from 'react'
// layout
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Layout