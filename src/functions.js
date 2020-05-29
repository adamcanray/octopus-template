/* 
* Usefull Function 
*
*/ 

/*
* Replace White Space and Special Character to Dash(-), then change it to lower case.
* regex from: https://stackoverflow.com/a/18936783/11587161 
*/
export const toDash = (str) => {
  return str.replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/g, '-').replace(/^(-)+|(-)+$/g,'').toLowerCase()
}