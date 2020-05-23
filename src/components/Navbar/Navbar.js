import React, { Component } from 'react'
import cx from 'classnames'
import s from './Navbar.scss'
import {Link} from 'react-router-dom'
import Modal from '../Modal/Modal'
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
      showModalMasuk: false,
      showModalLupaPassword: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  /* 
   * Collapse Toggle Function 
   * for trigger colapse Navbar on mobile screen
   */ 
  toggle(){
    this.setState({'collapse': !this.state.collapse})
  }
  /*
  * Modal Functions
  * *
  * handleOpenModal(nameFromState) - a function that allows us to open spesifics modal
  * handleCloseModal(nameFromState) - a function that allows us to close spesifics modal
  * handleNestedModal(nameParentModalFromState,nameChildModalFromState) - a function that allows us to open an Modal containing a button to open another Modal
  * *
  * note: handleNestedModal created because the react-modal can't handle two modals that opens in one Route
  */ 
  handleOpenModal(stateName) {
    this.setState({[stateName]:true})
  }
  handleCloseModal(stateName) {
    this.setState({[stateName]:false})
  }
  handleNestedModal(parentStateName,childStateName){
    this.setState({[parentStateName]:false,[childStateName]:true})
  }
  render(){
    const {
      showModalMasuk,
      showModalLupaPassword,
    } = this.state
    return (
      <div className={cx(s,"border-c_gray_4","border-b")}>
        <nav className={cx("justify-between","flex items-center flex-wrap px-10 py-3")}> 
          <div className={cx("flex items-center flex-shrink-0 text-black mr-3")}>
            <span className={cx("text-c_text_sz_h_large","font-bold tracking-tight")}>{process.env.REACT_APP_NAME_STORE}</span>
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
              <button onClick={() => this.handleOpenModal('showModalMasuk')} className={cx("btn-masuk","mx-3","hover:bg-c_orange_4 hover:text-white","focus:outline-none")}>Masuk</button>
              <button onClick={() => this.handleOpenModal('showModalLupaPassword')} className={cx("btn-daftar","ml-3","hover:bg-transparent hover:text-black hover:border-2 hover:border-c_orange_4","focus:outline-none")}>Daftar</button>
            </div>
          </div>
        </nav>

        <Modal 
          isOpen={showModalMasuk}
          contentLabel={'modal masuk'}
          onRequestClose={() => this.handleCloseModal('showModalMasuk')}
          shouldCloseOnOverlayClick={true}
        >
          <div>
            <div className={cx("text-c_text_sz_h_xlarge font-semibold leading-tight","text-center px-4")}>
              Selamat Datang! Silahkan masuk
            </div>
            <form className={cx("px-8 pt-8 pb-8 mb-4")}>
              <div className={cx("mb-4")}>
                <label className={cx("block text-gray-700 text-c_text_sz_body font-semibold mb-2")} for="email">
                  Nomor Telepon atau Email
                </label>
                <input className={cx("appearance-none border border-c_gray_4 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-c_text_sz_body")} id="email" type="text" placeholder="Silahkan masukan nomor telepon atau email"/>
              </div>
              <div className={cx("mb-2")}>
                <label className={cx("block text-gray-700 text-c_text_sz_body font-semibold mb-2")} for="password">
                  Password
                </label>
                <input className={cx("appearance-none border border-c_gray_4 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-c_text_sz_body")} id="password" type="password" placeholder="Silahkan masukan password"/>
                {/* <p className={cx("text-red-500 text-xs italic">Please choose a password.</p> */}
              </div>
              <div className={cx("text-right mb-2")}>
                <button onClick={() => this.handleNestedModal('showModalMasuk','showModalLupaPassword')} className={cx("inline-block align-baseline font-semibold text-c_text_sz_body text-c_blue_3 hover:text-blue-800")}>
                  Lupa Password?
                </button>
              </div>
              <div className={cx("w-full")}>
                <button className={cx("w-full bg-c_blue_3 hover:bg-blue-700 text-c_text_sz_h_reguler text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline")} type="button">
                  Masuk
                </button>
                <div className={cx("my-2 text-center")}>atau masuk dengan</div>
                <button className={cx("w-full bg-c_blue_facebook_1 hover:bg-blue-700 text-c_text_sz_h_reguler text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline")} type="button">
                  Facebook
                </button>
                <button className={cx("w-full bg-c_red_google_1 hover:bg-red-700 text-c_text_sz_h_reguler text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline")} type="button">
                  Google
                </button>
              </div>
            </form>
            <p className={cx("text-center text-gray-500 text-xs")}>
              &copy;2020 Octopus Template. All rights reserved.
            </p>
          </div>
        </Modal>

        <Modal
          isOpen={showModalLupaPassword}
          contentLabel={'modal lupa password'}
          onRequestClose={() => this.handleCloseModal('showModalLupaPassword')}
          shouldCloseOnOverlayClick={true}
          height={'h-96'}
        >
          <div>
            <div className={cx("text-c_text_sz_h_xlarge font-semibold leading-tight","px-4")}>
              Lupa Password?
            </div>
            <form className={cx("px-8 pt-8 pb-8 mb-4")}>
              <div className={cx("mb-4")}>
                <label className={cx("block text-gray-700 text-c_text_sz_body font-semibold mb-2")} for="email">
                  Nomor Telepon atau Email
                </label>
                <input className={cx("appearance-none border border-c_gray_4 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-c_text_sz_body")} id="email" type="text" placeholder="Silahkan masukan nomor telepon atau email"/>
              </div>
              <div className={cx("w-full")}>
                <button className={cx("w-full bg-c_blue_3 hover:bg-blue-700 text-c_text_sz_h_reguler text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline")} type="button">
                  Lanjutkan
                </button>
              </div>
              <div className={cx("w-full","mt-2")}>
                <button onClick={() => this.handleNestedModal('showModalLupaPassword','showModalMasuk')} className={cx("font-semibold text-c_text_sz_body text-c_blue_2 hover:text-c_blue_1")}>
                  Kembali
                </button>
              </div>
            </form>
            <p className={cx("text-center text-gray-500 text-xs")}>
              &copy;2020 Octopus Template. All rights reserved.
            </p>
          </div>
        </Modal>

      </div>
    )
  }
}

export default Navbar