import React, { Component } from 'react'
import cx from 'classnames'
import s from './Navbar.scss'
import {Link} from 'react-router-dom'
/*
* load svg as Component
* 
*/
import {ReactComponent as SearchIcon} from '../../icons/icon-search-1.svg'
import {ReactComponent as LoveIcon} from '../../icons/icon-love-1.svg'
import {ReactComponent as CartIcon} from '../../icons/icon-cart-1.svg'
import {ReactComponent as BorderIcon} from '../../icons/icon-border-1.svg'

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
      <div className={cx(s,"border-c_gray_4","border-b")}>
        <nav className={cx("justify-between","flex items-center flex-wrap px-10 py-3")}> 
          <div className={cx("flex items-center flex-shrink-0 text-black mr-3")}>
            <span className={cx("text-c_text_sz_h_large","font-bold tracking-tight")}>{process.env.REACT_APP_NAME} Store</span>
          </div>
          <div className={cx("block md:hidden")}>
            <button onClick={this.toggle.bind(this)} className={cx("flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-400 hover:border-gray-400")}>
              <svg className={cx("fill-current h-3 w-3")} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={
            cx(
              {"block":this.state.collapse,"hidden":!this.state.collapse},
              "w-full block flex-grow md:flex md:items-center md:w-auto",
            )
          }>
            <div className={cx("mt-2 md:mt-0")}>
              <Link to="/app/home" className={cx("btn-kategori","mx-3")}>
                Kategori
              </Link>
            </div>
            <div className={cx("flex-grow","mt-2 md:mt-0")}>
              <form className={cx("")}>
                <div className={cx("form-search-wrap","flex items-center mx-3")}>
                  <input className={cx("w-full pl-6","appearance-none bg-transparent border-none placeholder-black leading focus:outline-none")} type="text" placeholder="Search" aria-label="Full name" />
                  <button className={cx("bg-c_gray_4 hover:bg-c_gray_3 border-c_gray_4 hover:border-c_gray_3","rounded-lg rounded-l-none flex-shrink-0 border-4 text-white px-3 py-2")} type="button">
                    <SearchIcon />
                  </button>
                </div>
              </form>
            </div>
            <div className={cx("flex items-center","mt-2 md:mt-0")}>
              <div className={cx("mx-3")}>
                <Link to="/app/home" className={cx("","")}>
                  <LoveIcon />
                </Link>
              </div>
              <div className={cx("mx-3")}>
                <Link to="/app/home" className={cx("","")}>
                  <CartIcon />
                </Link>
              </div>
              <div className={cx("mx-3")}>
                <Link to="/app/home" className={cx("","")}>
                  <BorderIcon />
                </Link>
              </div>
              <Link to="/app/home" className={cx("btn-masuk","mx-3","hover:bg-c_orange_4 hover:text-white")}>
                Masuk
              </Link>
              <Link to="/app/home" className={cx("btn-daftar","ml-3","hover:bg-transparent hover:text-black hover:border-2 hover:border-c_orange_4")}>
                Daftar
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar