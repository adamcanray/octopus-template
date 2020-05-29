import config from "../../config";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'

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
    localStorage.setItem('token', token);
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
    }
  }
}

export const logoutAction = () => {
  return dispatch => {
    localStorage.removeItem('token');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // axios.defaults.headers.common['Authorization'] = "";
    return dispatch(logoutSuccess());
  }
}