import axios from 'axios'
import config from "../../config"

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}
export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
}
export const loginError = () => {
  return {
    type: LOGIN_ERROR
  }
}
export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
}
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const receiveToken = token => {
  return dispatch => {
    localStorage.setItem('token', token)
    dispatch(loginSuccess())
  }
}

export const loginAction = creds => {
  return dispatch => {
    dispatch(loginRequest())
    if(!config.isBackend){
      /*
      * Fake Authentication
      */
      dispatch(receiveToken('token'))
    }else{
      /*
      * Request to API 
      */ 
      axios.post(`${config.authAPI}/auth/login`,creds).then(res => {
        console.log(res)
        dispatch(receiveToken(res.data.access_token))
      }).catch(err => {
        console.log(err)
        dispatch(loginError())
      })
    }
  }
}

export const logoutAction = () => {
  return dispatch => {
    localStorage.removeItem('token')
    document.cookie = 'token=expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    // axios.defaults.headers.common['Authorization'] = ""
    return dispatch(logoutSuccess())
  }
}