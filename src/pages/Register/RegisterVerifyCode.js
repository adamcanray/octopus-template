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

/*
* Verify Input
* source: https://codedaily.io/tutorials/65/Create-a-Segmented-Auto-Moving-SMS-Code-Verification-Input-in-React
* 
* create empty array then fill each of element from that array with 0 
*/
const CODE_LENGTH = new Array(4).fill(0)

class RegisterVerifyCode extends Component {
  input = React.createRef()
  constructor(props){
    super(props)
    this.state = {
      value: '',
      focused: false,
    }
  }
  handleClick = () => {
    this.input.current.focus();
  };
  handleFocus = () => {
    this.setState({ focused: true });
  };
  handleBlur = () => {
    this.setState({
      focused: false,
    });
  };
  handleKeyUp = e => {
    if (e.key === "Backspace") {
      this.setState(state => {
        return {
          value: state.value.slice(0, state.value.length - 1),
        };
      });
    }
  };
  handleChange = e => {
    const value = e.target.value;

    this.setState(state => {
      if (state.value.length >= CODE_LENGTH.length) return null;
      return {
        value: (state.value + value).slice(0, CODE_LENGTH.length),
      };
    });
  };

  render() {
    console.log(this.state)
    const { value, focused } = this.state;

    const {
      location,
    } = this.props
    /* split codeValue to array */
    const values = value.split("")
    const selectedIndex = values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1
    const hideInput = !(values.length < CODE_LENGTH.length)
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
          <div className={cx("grid grid-cols-8 gap-4","bg-")}>
            <div className={cx("col-span-8","text-center text-c_text_sz_h_4large md:text-c_text_sz_h_xlarge","font-semibold leading-tight","mb-")}>
              Masukan Kode Verifikasi
            </div>
            <div className={cx("col-span-8","text-center font-normal text-c_text_sz_h_2reguler text-gray-700","mb-")}>
              Kode verifikasi telah dikirimkan ke {location.state.sendTo==='nomor'?'Nomor':location.state.sendTo==='email'?'Email':null}
            </div>
            <div className={cx("col-span-8 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4","text-center font-bold text-c_text_sz_h_large")}>
              {location.state.email}
            </div>
            <div className={cx("col-span-8 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4","text-center font-semibold text-c_text_sz_body","mt-4")}>
              Kode Verifikasi
            </div>
            <div className={cx(
              "col-span-8 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4",
              "mt-4",
              "bg-red-400",
              "flex justify-center relative"
            )}>
              <div className={cx(
                "inline-block relative flex justify-left",
                "bg-yellow-400"
              )}>
                <input
                  value=""
                  ref={this.input}
                  onChange={this.handleChange}
                  onKeyUp={this.handleKeyUp}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  className={cx(
                    "bg-blue-200",
                    "absolute border-none",
                    "text-c_text_sz_h_xlarge text-center",
                    "bg-transparent outline-none",
                    "w-20",
                    "z-10",
                    
                  )}
                  style={{
                    //width: "32px",
                    top: "0px",
                    bottom: "0px",
                    left: `${selectedIndex * 6.3}rem`,
                    //opacity: hideInput ? 0 : 1,
                  }}
                />
                {CODE_LENGTH.map((item,index)=>{
                  const selected = values.length === index
                  const filled = values.length === CODE_LENGTH.length && index === CODE_LENGTH.length - 1
                  return <div className={cx(
                    //"border-r border-red-700 w-20 h-32",
                    //"first:border-l",
                    "border-2 border-c_gray_4 w-20 h-32 rounded-lg",
                    "mx-2",
                    "flex items-center justify-center",
                    "text-c_text_sz_h_xlarge",
                    "relative",
                  )}>
                    {values[index]}
                    {(selected || filled) && focused && <div className={cx(
                      "absolute left-0 top-0 bottom-0 right-0 border-4 border-green-300"
                    )} />}
                  </div>
                })}
              </div>
            </div>
            <div className={cx("col-span-8 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-4","text-center font-semibold text-c_text_sz_body","mt-4")}>
              <button onClick={()=>'ok'} type="button">Verifikasi</button>
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
  )(RegisterVerifyCode)
)