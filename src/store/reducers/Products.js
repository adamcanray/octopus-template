import {
  GET_REQUEST,GET_SUCCESS,GET_ERROR,
  DETAIL_REQUEST,DETAIL_SUCCESS,DETAIL_ERROR,
} from '../actions/Products'

const initState = {
  getRequest: false,
  getSuccess: false,
  getError: false,
  getData: [],
  detailRequest: false,
  detailSuccess: false,
  detailError: false,
  detailData: [],
}

export default function Products(state = initState, action){
  switch(action.type){
    case GET_REQUEST:
      return {
        getRequest: true,
        getSuccess: false,
        getError: false,
        getData: [],
      }
    case GET_SUCCESS:
      return {
        getRequest: false,
        getSuccess: true,
        getError: false,
        getData: action.data,
      }
    case GET_ERROR:
      return {
        getRequest: false,
        getSuccess: false,
        getError: true,
        getData: [],
      }
    case DETAIL_REQUEST:
      return {
        detailRequest: true,
        detailSuccess: false,
        detailError: false,
        detailData: [],
      }
    case DETAIL_SUCCESS:
      return {
        detailRequest: false,
        detailSuccess: false,
        detailError: false,
        detailData: action.data,
      }
    case DETAIL_ERROR:
      return {
        detailRequest: false,
        detailSuccess: false,
        detailError: true,
        detailData: [],
      }
    default: 
      return state
  }
}