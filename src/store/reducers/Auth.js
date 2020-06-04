import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../actions/Auth'

const initState = {
  isAuthenticated: false,
  loginRequest: false,
  loginSuccess: false,
  loginError: false,
  logoutRequest: false,
}

export default function Auth(state = initState, action){
  switch(action.type){
    case LOGIN_REQUEST:
      return {
        isAuthenticated: false,
        loginRequest: true,
        loginSuccess: false,
        loginError: false,
      }
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        loginRequest: false,
        loginSuccess: true,
        loginError: false,
      }
    case LOGIN_ERROR:
      return {
        isAuthenticated: false,
        loginRequest: false,
        loginSuccess: false,
        loginError: true,
      }
    case LOGOUT_REQUEST:
      return {
        logoutRequest: true,
      }
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        logoutRequest: false,
      }
    default: 
      return state
  }
}