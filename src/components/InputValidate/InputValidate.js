/*
* Custom Input Validation
*
* method of classname:
* - Append(String) if just wanna append a classname to spesifics element.
* - Override(Boolean) set to True if wanna Override default classnames with your AppendClassname. list:
*    - overrideWrapperClassName
*    - overrideLabelClassName
*    - overrideInputClassName
* Note: 
*  - if wanna change passOutlineColor and notPassOutlineColor make sure we have 
*    added the custom utility to tailwind.config.js > Theme > boxShadow.
* *
*/

import React, {Component} from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'


class InputValidate extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const {
      /* Important */
      labelText,
      onChange,
      value,
      name,
      id,
      type,
      placeholder,
      autoComplete,
      passCondition,
      notPassCondition,
      passValidateText,
      notPassValidateText,
      /* Not Important */
      passOutlineColor,
      notPassOutlineColor,
      appendWrapperClassName,
      overrideWrapperClassName,
      appendLabelClassName,
      overrideLabelClassName,
      appendInputClassName,
      overrideInputClassName,
    } = this.props

    const defaultWrapperClassName = cx(
      "mb-4",
      appendWrapperClassName
    )
    const defaultLabelClassName = cx(
      "block text-gray-700 text-c_text_sz_body font-semibold mb-2",
      appendLabelClassName
    )
    const defaultInputClassName = cx(
      "text-c_text_sz_body",
      "appearance-none border border-c_gray_4 text-gray-700 leading-tight",
      "rounded w-full py-3 px-3",
      "focus:outline-none focus:shadow-c_outline_primary",
      appendInputClassName
    )
    const passValidateClassName = cx("mt-2","text-green-500 text-xs italic")
    const notPassValidateClassName = cx("mt-2","text-red-500 text-xs italic")
    const passOutline = `focus:shadow-${passOutlineColor?passOutlineColor:'c_outline_success'}`
    const notPassOutline = `focus:shadow-${notPassOutlineColor?notPassOutlineColor:'c_outline_danger'}`
    return (
      <div className={cx(overrideWrapperClassName?appendWrapperClassName:defaultWrapperClassName)}>
        <label className={cx(overrideLabelClassName?appendLabelClassName:defaultLabelClassName)} htmlFor={id}>
          {labelText}
        </label>
        <input onChange={onChange} value={value} name={name} id={id} type={type} 
          autoComplete={autoComplete}
          className={cx(
            overrideInputClassName?appendInputClassName:defaultInputClassName,
            {
              [passOutline]: value&&passCondition,
              [notPassOutline]: value&&notPassCondition,
            }  
          )} placeholder={placeholder}
        />
        {
          value ?
            passCondition ? (
              <p className={cx(passValidateClassName)}>{passValidateText}</p>
            ) : (
              <p className={cx(notPassValidateClassName)}>{notPassValidateText}</p>
            )
          : null
        }
      </div>
    )
  }
}

InputValidate.propTypes = {
  /* Important */
  labelText: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string,
  autoComplete: propTypes.string,
  passCondition: propTypes.bool,
  notPassCondition: propTypes.bool,
  passValidateText: propTypes.string,
  notPassValidateText: propTypes.string,
  /* Not Important */
  passOutlineColor: propTypes.string,
  notPassOutlineColor: propTypes.string,
  appendWrapperClassName: propTypes.string,
  overrideWrapperClassName: propTypes.bool,
  appendLabelClassName: propTypes.string,
  overrideLabelClassName: propTypes.bool,
  appendInputClassName: propTypes.string,
  overrideInputClassName: propTypes.bool,
}

InputValidate.defaultProps = {
  
}

export default InputValidate