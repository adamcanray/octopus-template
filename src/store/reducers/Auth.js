import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
} from '../actions/Auth'

const initState = {
  isAuthenticated: false,
  loginRequest: false,
  logoutRequest: false,
}

export default function Auth(state = initState, action){
  switch(action.type){
    case LOGIN_REQUEST:
      return {
        loginRequest: true,
      }
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        loginRequest: false,
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