/* 
* Usefull Function
*
*/ 

/*
* Replace White Space and Special Character to Dash(-), then change it to lower case.
* regex from: https://stackoverflow.com/a/18936783/11587161 
*/
export const toDash = (str) => {
  /* eslint-disable-next-line */
  return str.replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/g, '-').replace(/^(-)+|(-)+$/g,'').toLowerCase()
}
/*
* check if email is valid
* source: https://stackoverflow.com/a/39425165/11587161
*/
/* eslint-disable-next-line */
export let isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

