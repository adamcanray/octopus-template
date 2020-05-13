import React, { Component } from 'react'
import cx from 'classnames'
import {Link} from 'react-router-dom'

import s from './Navbar.scss'


class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapse: false,
    }
  }
  toggle(){
    this.setState({'collapse': !this.state.collapse})
  }
  render(){
    return (
      <div className={cx(s)}>
        <nav className="flex items-center justify-between flex-wrap bg-teal-600 px-6 py-3"> 
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
          </div>
          <div className="block md:hidden">
            <button onClick={this.toggle.bind(this)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={cx({"block":this.state.collapse,"hidden":!this.state.collapse},"w-full block flex-grow md:flex md:items-center md:w-auto")}>
            <div className="text-sm md:flex-grow">
              <Link to="/app/home" className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </Link>
              <Link to="/app/contact" className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                Contact
              </Link>
              <Link to="/app/about" className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white">
                About
              </Link>
            </div>
            <div>
              {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">Download</a> */}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar