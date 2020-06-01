/*
* Landing Page its Like Forgot Password Page
*  
*/ 

import React, { Component } from 'react'
import cx from 'classnames'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmail} from '../../functions'
import InputValidate from '../../components/InputValidate/InputValidate'
import {loginAction} from '../../store/actions/Auth'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      nama:'',
      namaValidate:false,
      email:'',
      emailValidate:false,
    }
    this.handleChange=this.handleChange.bind(this)
    this.doRegister=this.doRegister.bind(this)
  }
  /*
  * Event handler
  * 
  */
  handleChange(e){
    /*
    * use ID for key validation
    */
    const target = e.target
    const name = target.name
    const id = target.id
    const type = target.type
    let value = target.value
    /* validation */
    if(type==='email'){
      type==='email'&&isEmail.test(value) ?
      this.setState({[id]: true})
      : this.setState({[id]: false})
    }else if(type==='text'){
      type==='text'&&name==='nama'&&value.length>=4?
      this.setState({[id]:true})
      : this.setState({[id]:false})
    }
    /* 
    * default
    * value from input always set to state
    */
    this.setState({[name]:value})
  }
  doRegister(){
    const {
      nama,
      namaValidate,
      email,
      emailValidate,
    } = this.state
    namaValidate&&emailValidate?
    this.props.loginAction({nama,email})
    :alert('auth is invalid')
  }
  render() {
    console.log(this.props)
    const {
      nama,
      namaValidate,
      email,
      emailValidate,
    } = this.state
    // const {
    //   location,
    //   match
    // } = this.props
    return (
      <div className={cx("container pt-12")}>
        <div className={cx("grid grid-cols-8 gap-0")}>
          <div className={cx("col-span-8","text-center text-c_text_sz_h_4large md:text-c_text_sz_h_xlarge","font-semibold leading-tight","")}>
            Silahkan Daftar!
          </div>
          <div className={cx("col-span-8","text-center font-semibold text-c_text_sz_body text-gray-700")}>
            Sudah Punya Akun?&nbsp;<Link to={{pathname:'/login'}} className={cx("font-semibold text-c_green_2")}>Masuk</Link>
          </div>
          <form className={cx("col-span-8 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4","px-8 pt-8 pb-8 mb-4")}>
            <InputValidate 
              labelText={'Masukan Nama'}
              onChange={this.handleChange}
              value={nama} 
              name={'nama'} 
              id={'namaValidate'} 
              type={'nama'}
              autoComplete={'off'} 
              placeholder={'Masukan Nama'}
              passCondition={namaValidate}
              notPassCondition={!namaValidate}
              passValidateText={'Nama is valid'}
              notPassValidateText={'Nama length must greater then or equal 4'}
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
              value={email} 
              name={'email'} 
              id={'emailValidate'} 
              type={'email'}
              autoComplete={'off'} 
              placeholder={'Silahkan masukan nomor telepon atau email'}
              passCondition={emailValidate}
              notPassCondition={!emailValidate}
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
            <div className={cx("w-full","mt-4")}>
              <button onClick={this.doRegister} className={cx("w-full bg-c_blue_3 hover:bg-blue-700 text-c_text_sz_h_reguler text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline")} type="button">
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
          <p className={cx("col-start-1 col-end-9","py-8","text-center text-gray-500 text-xs")}>
            &copy;2020 Octopus Template. All rights reserved.
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(
// export default 
  connect(
    /*
    * import exits reducers from store.store
    */ 
    store=>({
      masukRequest: store.Auth.masukRequest,
      isAuthenticated: store.Auth.isAuthenticated,
    }),
    {
      /*
      * import actions from store.actions
      */
      loginAction,
    }
  )(Register)
)