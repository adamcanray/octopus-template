var fs = require('fs')
var bodyParser = require('body-parser')
var jsonServer = require('json-server')
var jwt = require('jsonwebtoken')

// method to return an Express server
const server = jsonServer.create()
// methor to return an Express router
// ex: in db.json contain "products":[{}...] so route gona be /products/
const router = jsonServer.router('./db.json')
// read and JSON Parse the users.json
const userdb = JSON.parse(fs.readFileSync('./users.json','UTF-8'))

// set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())
// or set your iwn middlewares settings:
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

// define some constant
const SECRET_KEY = '123456789' /* used to sign the payloads, secret must string */
const expiresIn = '1h' /* for setting the time of expiration for JWT access tokens */


// Create a token from a payload
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token (decode the token)
function verifyToken(token){
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undifined ? decode : err)
}

// Check if  the userexits in database
function isAuthenticated({email,password}){
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}


/* 
* Create a POST /auth/login endpoint which verifies if user exits in the database
* then create and send a JWT token to the user
*/ 
server.post('/auth/login', (req,res) => {
  console.log('data from body', req.body)
  // data from request
  const {email,password} = req.body
  console.log('this function auth',isAuthenticated({email,password}))
  // if auth is false, send status and close the code
  if(isAuthenticated({email,password}) === false){
    const status = 401
    const message = 'Incorrent email or password'
    res.status(status).json({status,message})
    // close the code, means does'nt read/execute another code bellow
    return
  }
  // if auth is true, create access_token then send it
  const access_token = createToken({email,password})
  res.status(200).json({access_token})
})

server.post('/auth/test', (req,res) => {
  console.log('data from body', req.body)
  // data from request
  const {str} = req.body
  // if auth is true, create access_token then send it
  res.status(200).json({str})
})


/*
* Middleware to checks that the authorization header has the Bearer scheme
* then verifies if the token is valid for all routes except the previous route since this is the one we use to login users
* cek token, karena private routes yang membutuhkan token untuk mengakses nya
* sepertinya harus di belakang /auth/, contoh /auth/test
*/
server.use(/^(?!\/auth).*$/, (req,res,next) => {
  // if request nto have authorization headers or Bearer scehme
  if(req.headers.authorization == undifined || req.headers.authorization.split(' ')[0] !== 'Bearer'){
    const status = 401
    const message = 'Bad authorization header'
    res.status(status).json({status,message})
    return
  }
  try{
    verifyToken(req.headers.authorization.split(' ')[1])
    // the next() method returns an object with two properties done and value
    next()
  } catch (err) {
    const status = 401
    const message = 'Error: access_token is not valid'
    res.status(status).json({status,message})
  }
})

/*
* Mount json-server then tun server on port 4000
*/
server.use(router)
// can also Mount json-server on a specific endpoint (/api):
// server.use('/api',router)
server.listen(4000, () => {
  console.log('Run Auth API Server at: http://locahost:4000')
})


/*
* now we can run this file with type `node server.js` 
* or add new script into packages.json:
* - "start-auth": "node server.js"
*/ 