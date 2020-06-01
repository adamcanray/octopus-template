/*
* Landing Page its Like Forgot Password Page
*  
*/ 

import React, { Component } from 'react'
import cx from 'classnames'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmail} from '../../functions'
import InputValidate from '../../components/InputValidate/InputValidate'
import {loginAction} from '../../store/actions/Auth'

class ForgotPassword extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputLupaPassword:'',
      inputLupaPasswordValidate:false,
    }
    this.handleChange=this.handleChange.bind(this)
    this.doLogin=this.doLogin.bind(this)
    this.doLupaPassword=this.doLupaPassword.bind(this)
    this.goBack=this.goBack.bind(this)
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
      inputLupaPassword,
      inputLupaPasswordValidate,
    } = this.state
    inputLupaPassword&&inputLupaPasswordValidate?
    this.props.loginAction({inputLupaPassword:inputLupaPassword})
    :alert('auth is invalid')
  }
  doLupaPassword(){
    const {
      inputLupaPassword,
      inputLupaPasswordValidate
    } = this.state
    alert(`email ${inputLupaPassword} ${inputLupaPasswordValidate?'is valid':'is invalid'}`)
  }
  goBack(){
    this.props.history.goBack()
  }
  render() {
    console.log(this.props)
    const {
      inputLupaPassword,
      inputLupaPasswordValidate,
    } = this.state
    // const {
    //   location,
    //   match
    // } = this.props
    return (
      <div className={cx("container pt-12")}>
        <div className={cx("grid grid-cols-8 gap-0")}>
          <div className={cx("col-span-8 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4","text-left text-c_text_sz_h_4large md:text-c_text_sz_h_xlarge","font-semibold leading-tight","px-8")}>
            Lupa Password?
          </div>
          <form className={cx("col-span-8 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4","px-8 pt-4 pb-8 mb-4")}>
            <InputValidate 
              labelText={'Masukan Nomor Telepon atau Email'}
              onChange={this.handleChange}
              value={inputLupaPassword} 
              name={'inputLupaPassword'} 
              id={'inputLupaPasswordValidate'} 
              type={'email'}
              autoComplete={'off'} 
              placeholder={'Silahkan masukan nomor telepon atau email'}
              passCondition={inputLupaPasswordValidate}
              notPassCondition={!inputLupaPasswordValidate}
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
              <button onClick={this.goBack} className={cx("font-semibold text-c_text_sz_body text-c_blue_2 hover:text-c_blue_1")} type="button">
                Kembali
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
  )(ForgotPassword)
)