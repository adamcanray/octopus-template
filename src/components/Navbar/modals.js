/*
* this file backup for Navbar.js
* bcause now login use page not modal
*
*/

import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import InputValidate from '../InputValidate/InputValidate'
import {regexIsEmail} from '../../functions'

export default class modals extends Component {
  constructor(props){
    super(props)
    this.state={
      /* Modals open */
      showModalDaftar: false,
      showModalMasuk: false,
      showModalVerifikasi: false,
      showModalLupaPassword: false,
      /* Input String */
      namaDaftar: '',
      emailDaftar: '',
      emailMasuk: '',
      passwordMasuk: '',
      inputLupaPassword: '',
      /* Validate */
      namaDaftarValidate: false,
      emailDaftarValidate: false,
      emailMasukValidate: false,
      passwordMasukValidate: false,
      emailLupaPasswordValidate: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleHideToShowAnotherModal = this.handleHideToShowAnotherModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.doLogin = this.doLogin.bind(this)
    this.doLupaPassword = this.doLupaPassword.bind(this)
  }
  /*
  * Modal Functions
  * *
  * handleOpenModal(nameFromState) - a function that allows us to open spesifics modal
  * handleCloseModal(nameFromState) - a function that allows us to close spesifics modal
  * handleHideToShowAnotherModal(nameParentModalFromState,nameChildModalFromState) - a function that allows us to open an Modal containing a button to open another Modal(handle hide Modalto show Another Modal)
  * *
  * note: 
  *   - handleHideToShowAnotherModal created because in many case we need hide the Modal to Show Another Modal
  *   - react-modal can't handle two modals that opens in one func
  */ 
  handleOpenModal(stateName) {
    this.setState({[stateName]:true})
  }
  handleCloseModal(stateName) {
    /*
    * clear input state when modal is close
    */
    this.setState({[stateName]:false})
  }
  handleHideToShowAnotherModal(modalToHide,modalToShow){
    this.setState({[modalToHide]:false,[modalToShow]:true})
  }
  /*
  * Event handler
  * 
  */
  handleChange(e){
    /*
    * use ID for key validation
    * regexIsEmail source: https://stackoverflow.com/a/39425165/11587161
    */
    const target = e.target
    const name = target.name
    const id = target.id
    const type = target.type
    let value = target.value
    /* validation */
    if(type==='email'){
      type==='email'&&regexIsEmail.test(value) ?
      this.setState({[id]: true})
      : this.setState({[id]: false})
    }
    else if(type==='password'){
      type==='password'&&value.length>=6?
      this.setState({[id]: true})
      : this.setState({[id]: false})
    }
    /* 
    * default
    * value from input always set to state
    */
    this.setState({[name]:value})
  }
  doLogin(){
    const {
      emailMasuk,
      passwordMasuk,
      emailMasukValidate,
      passwordMasukValidate
    } = this.state
    const postCredsThenhandleModal = () => {
      this.props.loginAction({email:emailMasuk,password:passwordMasuk})
      this.handleHideToShowAnotherModal('showModalMasuk','showModalVerifikasi')
    }
    emailMasukValidate&&passwordMasukValidate?
    postCredsThenhandleModal()
    :alert('auth is invalid')
  }
  doLupaPassword(){
    const {
      inputLupaPassword,
      emailLupaPasswordValidate
    } = this.state
    alert(`email ${inputLupaPassword} ${emailLupaPasswordValidate?'is valid':'is invalid'}`)
  }
  render(){
    const {
      /* Modals */ 
      showModalDaftar,
      showModalMasuk,
      showModalLupaPassword,
      showModalVerifikasi,
      /* Input String */ 
      namaDaftar,
      emailDaftar,
      emailMasuk,
      passwordMasuk,
      inputLupaPassword,
      /* Validate */
      namaDaftarValidate,
      emailDaftarValidate,
      emailMasukValidate,
      passwordMasukValidate,
      emailLupaPasswordValidate,
    } = this.state
    return(
      <div>
        <button onClick={() => this.handleOpenModal('showModalMasuk')} className={cx("btn-masuk","mx-3","hover:bg-c_blue_3 hover:text-white","focus:outline-none")} type="button">Masuk</button>
  
        <Modal 
          isOpen={showModalMasuk}
          contentLabel={'modal masuk'}
          onRequestClose={() => this.handleCloseModal('showModalMasuk')}
          shouldCloseOnOverlayClick={true}
          title={true}
          titleText={'Selamat Datang! Silahkan masuk'}
        >
          <div>
            <div className={cx("font-semibold text-c_text_sz_body text-gray-700","text-center")}>
              Belum Punya Akun?&nbsp;<button onClick={() => this.handleHideToShowAnotherModal('showModalMasuk','showModalDaftar')} className={cx("font-semibold text-c_green_2")} type="button">Daftar</button>
            </div>
            <form className={cx("px-8 pt-8 pb-8 mb-4")}>
              <InputValidate 
                labelText={'Masukan Nomor Telepon atau Email'}
                onChange={this.handleChange}
                value={emailMasuk} 
                name={'emailMasuk'} 
                id={'emailMasukValidate'} 
                type={'email'}
                autoComplete={'off'} 
                placeholder={'Silahkan masukan nomor telepon atau email'}
                passCondition={emailMasukValidate}
                notPassCondition={!emailMasukValidate}
                passValidateText={'Email is valid'}
                notPassValidateText={'Email is invalid'}
                passOutlineColor={''}
                notPassOutlineColor={''}
                appendWrapperClassName={''}
                overrideWrapperClassName={false}
                appendLabelClassName={''}
                overrideLabelClassName={false}
                appendInputClassName={''}
                overrideInputClassName={false}
              />
              <InputValidate 
                labelText={'Password'}
                onChange={this.handleChange}
                value={passwordMasuk} 
                name={'passwordMasuk'} 
                id={'passwordMasukValidate'} 
                type={'password'}
                autoComplete={'off'} 
                placeholder={'Silahkan masukan password'}
                passCondition={passwordMasukValidate}
                notPassCondition={!passwordMasukValidate}
                passValidateText={'Password is valid'}
                notPassValidateText={'Password is invalid'}
                passOutlineColor={''}
                notPassOutlineColor={''}
                appendWrapperClassName={'mb-2'}
                overrideWrapperClassName={true}
                appendLabelClassName={''}
                overrideLabelClassName={false}
                appendInputClassName={''}
                overrideInputClassName={false}
              />
              <div className={cx("text-right mb-2")}>
                <button onClick={() => this.handleHideToShowAnotherModal('showModalMasuk','showModalLupaPassword')} className={cx("inline-block align-baseline font-semibold text-c_text_sz_body text-c_blue_3 hover:text-blue-800")} type="button">
                  Lupa Password?
                </button>
              </div>
              <div className={cx("w-full")}>
                <button onClick={this.doLogin} className={cx("w-full bg-c_blue_3 hover:bg-blue-700 text-c_text_sz_h_reguler text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline")} type="button">
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
          isOpen={showModalDaftar}
          contentLabel={'modal daftar'}
          onRequestClose={() => this.handleCloseModal('showModalDaftar')}
          shouldCloseOnOverlayClick={true}
          title={true}
          titleText={'Daftar Sekarang'}
        >
          <div>
            <div className={cx("font-semibold text-c_text_sz_body text-gray-700","text-center")}>
              Sudah Punya Akun?&nbsp;<button onClick={() => this.handleHideToShowAnotherModal('showModalDaftar','showModalMasuk')} className={cx("font-semibold text-c_green_2")} type="button">Masuk</button>
            </div>
            <form className={cx("px-8 pt-8 pb-8 mb-4")}>
              <InputValidate 
                labelText={'Masukan Nama'}
                onChange={this.handleChange}
                value={namaDaftar} 
                name={'namaDaftar'} 
                id={'namaDaftarValidate'} 
                type={'text'}
                autoComplete={'off'} 
                placeholder={'Masukan nama'}
                passCondition={namaDaftarValidate}
                notPassCondition={!namaDaftarValidate}
                passValidateText={'Nama is valid'}
                notPassValidateText={'Nama is invalid'}
                passOutlineColor={''}
                notPassOutlineColor={''}
                appendWrapperClassName={''}
                overrideWrapperClassName={false}
                appendLabelClassName={''}
                overrideLabelClassName={false}
                appendInputClassName={''}
                overrideInputClassName={false}
              />
              <InputValidate 
                labelText={'Masukan Nomor Telepon atau Email'}
                onChange={this.handleChange}
                value={emailDaftar} 
                name={'emailDaftar'} 
                id={'emailDaftarValidate'} 
                type={'email'}
                autoComplete={'off'} 
                placeholder={'Silahkan masukan nomor telepon atau email'}
                passCondition={emailDaftarValidate}
                notPassCondition={!emailDaftarValidate}
                passValidateText={'Email is valid'}
                notPassValidateText={'Email is invalid'}
                passOutlineColor={''}
                notPassOutlineColor={''}
                appendWrapperClassName={''}
                overrideWrapperClassName={false}
                appendLabelClassName={''}
                overrideLabelClassName={false}
                appendInputClassName={''}
                overrideInputClassName={false}
              />
              <div className={cx("text-right mb-2")}>
                
              </div>
              <div className={cx("w-full")}>
                <button onClick={this.doLogin} className={cx("w-full bg-c_blue_3 hover:bg-blue-700 text-c_text_sz_h_reguler text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline")} type="button">
                  Daftar
                </button>
                <div className={cx("my-2 text-center")}>atau daftar dengan</div>
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
          title={true}
          titleText={'Lupa Password?'}
          titleTextAlign={'left'}
        >
          <div>
            <form className={cx("px-8 pt-8 pb-8 mb-4")}>
              <InputValidate 
                labelText={'Masukan Nomor Telepon atau Email'}
                onChange={this.handleChange}
                value={inputLupaPassword} 
                name={'inputLupaPassword'} 
                id={'emailLupaPasswordValidate'} 
                type={'email'}
                autoComplete={'off'} 
                placeholder={'Silahkan masukan nomor telepon atau email'}
                passCondition={emailLupaPasswordValidate}
                notPassCondition={!emailLupaPasswordValidate}
                passValidateText={'Email is valid'}
                notPassValidateText={'Email is invalid'}
                passOutlineColor={''}
                notPassOutlineColor={''}
                appendWrapperClassName={''}
                overrideWrapperClassName={false}
                appendLabelClassName={''}
                overrideLabelClassName={false}
                appendInputClassName={''}
                overrideInputClassName={false}
              />
              <div className={cx("w-full")}>
                <button onClick={this.doLupaPassword} className={cx("w-full bg-c_blue_3 hover:bg-blue-700 text-c_text_sz_h_reguler text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline")} type="button">
                  Lanjutkan
                </button>
              </div>
              <div className={cx("w-full","mt-2")}>
                <button onClick={() => this.handleHideToShowAnotherModal('showModalLupaPassword','showModalMasuk')} className={cx("font-semibold text-c_text_sz_body text-c_blue_2 hover:text-c_blue_1")} type="button">
                  Kembali
                </button>
              </div>
            </form>
            <p className={cx("text-center text-gray-500 text-xs")}>
              &copy;2020 Octopus Template. All rights reserved.
            </p>
          </div>
        </Modal>
        <Modal
          isOpen={showModalVerifikasi}
          contentLabel={'modal verifikasi masuk'}
          onRequestClose={() => this.handleCloseModal('showModalVerifikasi')}
          shouldCloseOnOverlayClick={true}
          height={'h-72'}
          title={true}
          titleText={'Pilih Metode Verifikasi'}
          titleTextAlign={'center'}
        >
          <div className={cx("px-10")}>
            <div className={cx("w-full pt-2")}>
              <button className={cx("btn w-full px-4 py-3","text-left text-c_text_sz_body text-c_gray_3","border border-c_gray_4 rounded-md","hover:bg-c_gray_5 focus:outline-none")}>blabla</button>
            </div>
            <div className={cx("w-full pt-2")}>
              <button className={cx("btn w-full px-4 py-3","text-left text-c_text_sz_body text-c_gray_3","border border-c_gray_4 rounded-md","hover:bg-c_gray_5 focus:outline-none")}>blabla</button>
            </div>
            <p className={cx("text-center text-gray-500 text-xs")}>
              &copy;2020 Octopus Template. All rights reserved.
            </p>
          </div>
        </Modal>
      </div>
    )
  }
}
