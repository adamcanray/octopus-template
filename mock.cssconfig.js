/* 
* Mock CSS
*
* this file contains mock css from designer
* ex: borderColor, buttonColor, etc.
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
* code source: self
*/
const pxToRem = px => {
  const remPer1Px = 0.0625
  const rem = remPer1Px * px
  return rem.toString().concat('rem')
}

/*
* Convert hex to rgba
* code source: https://stackoverflow.com/a/21648508/11587161
*/
const hexToRgbA = (hex,a) => {
  let c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+a+')';
  }
  throw new Error('Bad Hex');
}

/*
* Colors
*
*/

const c_blue_1 = '#0D47A1'
const c_blue_2 = '#1976D2'
const c_blue_3 = '#2196F3'
const c_blue_4 = '#64B5F6'
const c_blue_5 = '#BBDEFB'
const c_blue_facebook_1 = '#3B5998'

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

const c_red_google_1 = '#D24836'

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
const c_text_sz_h_2reguler = pxToRem(20)
const c_text_sz_h_3reguler = pxToRem(22)
const c_text_sz_h_large = pxToRem(24)
const c_text_sz_h_2large = pxToRem(26)
const c_text_sz_h_3large = pxToRem(28)
const c_text_sz_h_4large = pxToRem(28)
const c_text_sz_h_xlarge = pxToRem(32)

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
*
*/
const c_container_p_on_sm = '1rem'
const c_container_p_on_md = '1.5rem'
const c_container_p_on_lg = '2rem'
const c_container_p_on_xl = '2.5rem'
// const c_container_p_on_xl = '3rem'

/* 
* Card New Service
* stand: custom container padding on screen {screen size}
* gradien background based on design
*
*/
const c_gradient_bg_1 = 'linear-gradient(90deg, #4284DB 0%, #29EAC4 100%)'
const c_gradient_bg_2 = 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)'

/* 
* Card Product Shadow
* stand: custom container padding on screen {screen size}
* box-shadow based on design
*
*/
const c_box_shadow_1 = `0px 0px 8px ${hexToRgbA('#000',.2)}`
const c_box_shadow_2 = `0px 4px 6px ${hexToRgbA('#000',.08)}`

/*
* Outline Shadows Colors
* stand: custom outline <alias_name_colors>
* 
*/
const c_outline_primary = `0 0 0 3px ${hexToRgbA(c_blue_3,.4)}`
const c_outline_success = `0 0 0 3px ${hexToRgbA(c_green_3,.4)}`
const c_outline_danger = `0 0 0 3px ${hexToRgbA(c_orange_1,.4)}`


/*
* Object to Export
*
*/
const mock = {
  // func
  pxToRem,
  // Colors
  c_blue_1,
  c_blue_2,
  c_blue_3,
  c_blue_4,
  c_blue_5,
  c_blue_facebook_1,
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
  c_red_google_1,
  // Font Size
  c_text_sz_caption,
  c_text_sz_body,
  c_text_sz_h_small,
  c_text_sz_h_reguler,
  c_text_sz_h_2reguler,
  c_text_sz_h_3reguler,
  c_text_sz_h_large,
  c_text_sz_h_2large,
  c_text_sz_h_3large,
  c_text_sz_h_4large,
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
  // Card New Service
  c_gradient_bg_1,
  c_gradient_bg_2,
  // Card Product Shadow
  c_box_shadow_1,
  c_box_shadow_2,
  // Outline Shadows Colors
  c_outline_primary,
  c_outline_success,
  c_outline_danger,
}


/*
* Export
* ES5
*/
module.exports = mock