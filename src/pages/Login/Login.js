/*
* Landing Page its Like Login Page
*  
*/ 

import React, { Component } from 'react'
import cx from 'classnames'
import {Link,Redirect,withRouter} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import config from '../../config'
import {connect} from 'react-redux'
import {isEmail} from '../../functions'
import InputValidate from '../../components/InputValidate/InputValidate'
import {loginAction} from '../../store/actions/Auth'

class Login extends Component {
  static isAuthenticated(token) {
    if (!token) return
    const date = new Date().getTime() / 1000
    const data = jwt.decode(token)
    console.log(token)
    console.log(data)
    /* allow anyone if config.isBackend still False */
    return config.isBackend?date < data.exp:true
  }
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      emailValidate:false,
      passwordValidate:false,
    }
    this.handleChange=this.handleChange.bind(this)
    this.doLogin=this.doLogin.bind(this)
    this.doLupaPassword=this.doLupaPassword.bind(this)
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
      email,
      password,
      emailValidate,
      passwordValidate,
    } = this.state
    emailValidate&&passwordValidate?
    this.props.loginAction({email:email,password:password})
    :alert('auth is invalid')
  }
  doLupaPassword(){
    const {
      inputLupaPassword,
      emailLupaPasswordValidate
    } = this.state
    alert(`email ${inputLupaPassword} ${emailLupaPasswordValidate?'is valid':'is invalid'}`)
  }
  render() {
    // const { from } = this.props.location.state || {
    //   from: { pathname: "/app" }
    // } 
    // eslint-disable-line
    if (Login.isAuthenticated(localStorage.getItem("token"))) {
      return <Redirect to={{ pathname:'/app' }} />;
    }
    console.log(this.props)
    const {
      email,
      emailValidate,
      password,
      passwordValidate,
    } = this.state
    // const {
    //   location,
    //   match
    // } = this.props
    return (
      <div className={cx("container pt-12")}>
        <div className={cx("grid grid-cols-8 gap-0")}>
          <div className={cx("col-span-8","text-center text-c_text_sz_h_4large md:text-c_text_sz_h_xlarge","font-semibold leading-tight","")}>
            Selamat Datang! Silahkan masuk
          </div>
          <div className={cx("col-span-8","text-center font-semibold text-c_text_sz_body text-gray-700")}>
            Belum Punya Akun?&nbsp;<Link to={{pathname:'/register'}} className={cx("font-semibold text-c_green_2")}>Daftar</Link>
          </div>
          <form className={cx("col-span-8 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4","px-8 pt-8 pb-8 mb-4")}>
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
            <InputValidate 
              labelText={'Password'}
              onChange={this.handleChange}
              value={password} 
              name={'password'} 
              id={'passwordValidate'} 
              type={'password'}
              autoComplete={'off'} 
              placeholder={'Silahkan masukan password'}
              passCondition={passwordValidate}
              notPassCondition={!passwordValidate}
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
              <Link to={{pathname:'/forgot-password'}} className={cx("inline-block align-baseline font-semibold text-c_text_sz_body text-c_blue_3 hover:text-blue-800")}>
                Lupa Password?
              </Link>
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
  )(Login)
)