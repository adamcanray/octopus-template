import { combineReducers } from "redux"

import Auth from './reducers/Auth'
import Products from './reducers/Products'

export default combineReducers({
  Auth,
  Products,
})