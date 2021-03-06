import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import axios from 'axios'
import App from './App'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './styles/index.css'
import './index.scss'

import rootReducer from './store/store'

const store = createStore(rootReducer,applyMiddleware(thunk))

const token = localStorage.getItem('token')

axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

console.log(token)

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()