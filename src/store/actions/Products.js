import axios from 'axios'
import config from "../../config"

export const GET_REQUEST = 'GET_REQUEST'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_ERROR = 'GET_ERROR'
export const DETAIL_REQUEST = 'DETAIL_REQUEST'
export const DETAIL_SUCCESS = 'DETAIL_SUCCESS'
export const DETAIL_ERROR = 'DETAIL_ERROR'

export const getRequest = () => {
  return {
    type: GET_REQUEST
  }
}
export const getSuccess = (data) => {
  return {
    type: GET_SUCCESS,
    data
  }
}
export const getError = () => {
  return {
    type: GET_ERROR
  }
}
export const detailRequest = () => {
  return {
    type: DETAIL_REQUEST
  }
}
export const detailSuccess = (data) => {
  return {
    type: DETAIL_SUCCESS,
    data
  }
}
export const detailError = () => {
  return {
    type: DETAIL_ERROR
  }
}

export const getProducts = page => {
  return dispatch => {
    dispatch(getRequest())
    axios.get(`${config.api}/products?_page=${page}`).then(res=>{
      console.log(res)
      dispatch(getSuccess(res.data))
    })
  }
}
export const detailProduct = id => {
  return dispatch => {
    dispatch(detailRequest())
    axios.get(`${config.api}/products?id=${id}`).then(res=>{
      console.log(res)
      dispatch(detailSuccess(res.data))
    })
  }
}