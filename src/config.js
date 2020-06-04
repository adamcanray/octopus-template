const APP_NAME = process.env.REACT_APP_NAME
const api = process.env.REACT_APP_MAIN_URL_API
const authAPI = 'http://localhost:4000'
const isBackend = true
const config = {
  APP_NAME,
  isBackend,
  api,
  authAPI
}
export default config