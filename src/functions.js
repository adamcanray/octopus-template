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


/*
* move array
* source: https://stackoverflow.com/a/5306832/11587161
*/
export const array_move = (arr, old_index, new_index) => {
  while (old_index < 0) {
    old_index += arr.length
  }
  while (new_index < 0) {
    new_index += arr.length
  }
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr // for testing purposes
}