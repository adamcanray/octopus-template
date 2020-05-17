/* 
* Aladin Store mock css
*
* this file contains mock css from designer
* example: borderColor, buttonColor, etc.
* "c" stand for "custom"
*
* priority "rem" over "px"
* 1px = 0.0625rem (if default pixel was: 16px)
* website that provide convert px to rem: https://www.ninjaunits.com/converters/pixels/pixels-rem/
* 
*
*/

/*
* Convert px to rem
* Default Pixel: 16
*/
const pxToRem = px => {
  const remPer1Px = 0.0625
  const rem = remPer1Px * px
  return rem.toString().concat('rem')
}


/*
* Colors
* stand: custom {colorName} {number}
* 1(dark) to 5(light)
*
*/

const c_blue_1 = '#0D47A1'
const c_blue_2 = '#1976D2'
const c_blue_3 = '#2196F3'
const c_blue_4 = '#64B5F6'
const c_blue_5 = '#BBDEFB'

const c_orange_1 = '#E65100'
const c_orange_2 = '#F57C00'
const c_orange_3 = '#FF9800'
const c_orange_4 = '#FFB74D'
const c_orange_5 = '#FFE0B2'

const c_green_1 = '#1B5E20'
const c_green_2 = '#5AC462'
const c_green_3 = '#69E282'
const c_green_4 = '#8EEDB3'
const c_green_5 = '#C6F4CE'

const c_gray_1 = '#212121'
const c_gray_2 = '#616161'
const c_gray_3 = '#9E9E9E'
const c_gray_4 = '#E0E0E0'
const c_gray_5 = '#F5F5F5'


/*
* Font Size
* stand: custom text size {nameSize}
* the unit of design is "px"
* just pass number as argument to pxToRem() func, pxToRem() does't render other than number
*
*/
const c_text_sz_caption = pxToRem(12)
const c_text_sz_body = pxToRem(14)
const c_text_sz_h_small = pxToRem(16)
const c_text_sz_h_reguler = pxToRem(18)
const c_text_sz_h_large = pxToRem(24)
const c_text_sz_h_xlarge = pxToRem(36)


/*
* Font Family
* 
*/
const c_font_family_sans_serif_1 = '"Source Sans Pro"'


/*
* Slider Image Style
*
*/
// const c_slider_image_wrap_width = pxToRem(600)
const c_slider_image_wrap_width = pxToRem(600)
const c_slider_image_wrap_height = pxToRem(283)


/* 
* Container Padding
* stand: custom container padding on screen {screen size}
* variable name based on tailwindcss
*/
const c_container_p_on_sm = '1rem'
const c_container_p_on_md = '1.5rem'
const c_container_p_on_lg = '2rem'
const c_container_p_on_xl = '2.5rem'


/*
* Object to Export
*
*/
const mock = {
  // Colors
  c_blue_1,
  c_blue_2,
  c_blue_3,
  c_blue_4,
  c_blue_5,
  c_orange_1,
  c_orange_2,
  c_orange_3,
  c_orange_4,
  c_orange_5,
  c_green_1,
  c_green_2,
  c_green_3,
  c_green_4,
  c_green_5,
  c_gray_1,
  c_gray_2,
  c_gray_3,
  c_gray_4,
  c_gray_5,
  // Font Size
  c_text_sz_caption,
  c_text_sz_body,
  c_text_sz_h_small,
  c_text_sz_h_reguler,
  c_text_sz_h_large,
  c_text_sz_h_xlarge,
  // Font Family
  c_font_family_sans_serif_1,
  // Slider Image Style
  c_slider_image_wrap_width,
  c_slider_image_wrap_height,
  // Container
  c_container_p_on_sm,
  c_container_p_on_md,
  c_container_p_on_lg,
  c_container_p_on_xl,
}


/*
* Export
* ES5
*/
module.exports = mock