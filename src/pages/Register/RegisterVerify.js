/*
* Landing Page its Like Forgot Password Page
*  
*/ 

import React, { Component } from 'react'
import cx from 'classnames'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmail} from 'functions'
import InputValidate from 'components/InputValidate/InputValidate'
import PageWrapper from 'components/PageWrapper/PageWrapper'
import {loginAction} from 'store/actions/Auth'

class RegisterVerify extends Component {
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
    // this.props.loginAction({nama,email})
    this.props.history.push('/register/verify',{nama})
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
    const {
      location,
      // match
    } = this.props
    return (
      <PageWrapper breadcrumbs={[
        {
          name: 'Home',
          nav: '/'
        },
        {
          name: 'Register',
          nav: '/register'
        },
        {
          name: 'Verify Page',
          nav: '/register/verify'
        },
      ]}>
        <div className={cx("container pt-12")}>
          <div className={cx("grid grid-cols-8 gap-","bg-")}>
            <div className={cx("col-span-8","text-center text-c_text_sz_h_4large md:text-c_text_sz_h_xlarge","font-semibold leading-tight","py-")}>
              Pilih Metode Verifikasi
            </div>
            <div className={cx("col-span-8","text-center font-normal text-c_text_sz_body text-gray-700","mb-6")}>
              Pilih salah satu metode varifikasi kode dibawah ini
            </div>
            <div className={cx("col-span-8 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4")}>
              <div className={cx("w-full pt-2")}>
                <Link to={{pathname:'/register/verify/code/',state: {sendTo: 'sms',nomor:location.state.nomor}}} className={cx("text-c_text_sz_body text-c_gray_3")}>
                  <div className={cx("w-full px-4 py-3","text-left","border border-c_gray_4 rounded-md","hover:bg-c_gray_5 hover:cursor-pointer focus:outline-none")}>
                    Pesan SMS ke Nomor {location.state.nomor}
                  </div>
                </Link>
              </div>
              <div className={cx("w-full pt-2")}>
                <Link to={{pathname:'/register/verify/code/',state: {sendTo: 'wa',nomor:location.state.nomor}}} className={cx("text-c_text_sz_body text-c_gray_3")}>
                  <div className={cx("w-full px-4 py-3","text-left","border border-c_gray_4 rounded-md","hover:bg-c_gray_5 hover:cursor-pointer focus:outline-none")}>
                    Pesan Whatsapp ke Nomor {location.state.nomor}
                  </div>
                </Link>
              </div>
              <div className={cx("w-full pt-2")}>
                <Link to={{pathname:'/register/verify/code/',state: {sendTo: 'email',email:location.state.email}}} className={cx("text-c_text_sz_body text-c_gray_3")}>
                  <div className={cx("w-full px-4 py-3","text-left","border border-c_gray_4 rounded-md","hover:bg-c_gray_5 hover:cursor-pointer focus:outline-none")}>
                    Kirim ke Email {location.state.email}
                  </div>
                </Link>
              </div>
            </div>
            <p className={cx("col-start-1 col-end-9","py-8","text-center text-gray-500 text-xs")}>
              &copy;2020 Octopus Template. All rights reserved.
            </p>
          </div>
        </div>
      </PageWrapper>
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
      //masukRequest: store.Auth.masukRequest,
      //isAuthenticated: store.Auth.isAuthenticated,
    }),
    {
      /*
      * import actions from store.actions
      */
      //loginAction,
    }
  )(RegisterVerify)
)