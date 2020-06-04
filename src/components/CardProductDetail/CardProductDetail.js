/*
* Card Product Detail
* 
* 
* Note: 
*
*/

import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import cx from 'classnames'
import Rating from 'react-rating'
// import Truncate from 'react-truncate'
import ImageZoom from 'components/ImageZoom/ImageZoom'
import {ReactComponent as IconStartDim} from 'icons/icon-star-dim-1.svg'
import {ReactComponent as IconStartShining} from 'icons/icon-star-shining-1.svg'
import {ReactComponent as IconMinus} from 'icons/icon-minus-1.svg'
import {ReactComponent as IconPlus} from 'icons/icon-plus-1.svg'
import Img1 from 'images/product-image-1.jpg'
import {array_move} from 'functions'

class CardProductDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      alt: '',
      img: [],
      kategori: {},
      location: '',
      name: '',
      price: '',
      rating: '',
    }
    this.nextImage=this.nextImage.bind(this)
    this.prevImage=this.prevImage.bind(this)
  }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.data !== this.props.data){
  //     this.setState({
  //       id: nextProps.data[0].id,
  //       alt: nextProps.data[0].imgAlt,
  //       img: nextProps.data[0].imgUrl,
  //       kategori: nextProps.data[0].kategori,
  //       location: nextProps.data[0].productLocation,
  //       name: nextProps.data[0].productName,
  //       price: nextProps.data[0].productPrice,
  //       rating: nextProps.data[0].productRating,
  //     })
  //   }
  // }
  nextImage(){
    this.setState(state => {
      const img = array_move(state.img, 0, state.img.length-1)
      return {
        img
      }
    })
  }
  prevImage(){
    this.setState(state => {
      const img = array_move(state.img, state.img.length-1, 0)
      return {
        img
      }
    })
  }
  render(){
    // console.log(this.state)
    const {
      id,alt,img,kategori,location,name,price,rating,
    } = this.state
    const LargeImage = (props) => {
      const {
        img,alt
      } = props
      return (
        <div className={cx("","","col-span-12","","flex items-center")}>
          <div className={cx("h-80 md:min-h-52 lg:h-80","rounded-md overflow-hidden","sticky top-0")}>
            <button type="button" onClick={this.prevImage}>prev image</button>
            <button type="button" onClick={this.nextImage}>next image</button>
            <ImageZoom imgUrl={img} alt={alt} />
          </div>
        </div>
      )
    }
    const Main =  (
      <div className={cx("bg-white rounded-md","grid grid-cols-12 gap-","py-4 px-6","min-h-104")} key={id}>
        <div className={cx("","col-span-12 md:col-span-5","grid grid-cols-12","")}>
          <LargeImage img={img[0]} alt={id} />
          <div className={cx("pt-4 md:pt-2 lg:pt-4","","col-span-12","h-30 md:h-20 lg:h-30","gri grid-cols- gap-","flex ")}>
            <div className={cx("mr-1","rounded-md overflow-hidden","  h-full w-full","col-span-")}>
              <img className={cx("h-full w-full object-cover")} src={img[1]} alt="gambar-1"/>
            </div>
            <div className={cx("mx-1","rounded-md overflow-hidden","  h-full w-full","col-span-")}>
              <img className={cx("h-full w-full object-cover")} src={img[2]} alt="gambar-1"/>
            </div>
            <div className={cx("ml-1","rounded-md overflow-hidden","  h-full w-full","col-span-")}>
              <img className={cx("h-full w-full object-cover")} src={img[3]} alt="gambar-1"/>
            </div>
          </div>
        </div>
        <div className={cx("","col-span-12 md:col-span-7","grid grid-cols-12 gap-","divide-y divide-gray-400","ml-0 mt-4 md:mt-0 md:ml-8")}>
          <div className={cx("col-span-12","grid grid-cols-12","leading-tight","pb-2")}>
            <div className={cx("col-span-12","flex items-center")}>
              <span className={cx("font-bold text-c_text_sz_h_reguler")}>name</span>
            </div>
            <div className={cx("col-span-12","flex items-center")}>
              <Rating
                emptySymbol={<IconStartDim href="#icon-star-empty" className={cx("mx-1")} />}
                fullSymbol={<IconStartShining href="#icon-star-full" className={cx("mx-1")} />}
                initialRating={4}
                readonly
              />
              <span className={cx("font-semibold text-c_text_sz_body","ml-2")}>(100)</span>
            </div>
          </div>
          <div className={cx("col-span-12","grid grid-cols-12 gap-","py-2")}>
            <div className={cx("","col-span-3")}>
              <span className={cx("","font-semibold text-c_text_sz_body text-c_gray_3")}>Harga</span>
            </div>
            <div className={cx("","col-span-9")}>
              <span className={cx("","font-bold text-c_text_sz_h_large text-c_orange_1")}>Rp. 40.000</span>
            </div>
          </div>
          <div className={cx("col-span-12","grid grid-cols-12 gap-","py-2")}>
            <div className={cx("col-span-3")}>
              <span className={cx("font-semibold text-c_text_sz_body text-c_gray_3")}>Jumlah</span>
            </div>
            <div className={cx("col-span-9","flex items-center")}>
              <button className={cx("rounded-full bg-c_gray_3","mr-8 p-1")} type="button"><IconMinus/></button>
              <span className={cx("font-bold text-c_text_sz_body")}>1</span>
              <button className={cx("rounded-full bg-c_orange_2","ml-8 p-1")} type="button"><IconPlus/></button>
              <div className={cx("text-c_text_sz_caption text-c_green_2","ml-2")}>beli lebih banyak lebih murah</div>
            </div>
          </div>
          <div className={cx("col-span-12","grid grid-cols-12 gap-","py-2")}>
            <div className={cx("col-span-3")}>
              <span className={cx("font-semibold text-c_text_sz_body text-c_gray_3")}>Info Produk</span>
            </div>
            <div className={cx("col-span-9","grid grid-cols-12 gap-","")}>
              <div className={cx("col-span-12","grid grid-cols-12"," py-2")}>
                <div className={cx("col-span-3")}>
                  <span className={cx("font-semibold text-c_text_sz_body")}>Berat</span>
                </div>
                <div className={cx("col-span-9")}>
                  <span className={cx("font-semibold text-c_text_sz_body","rounded-md border border-c_gray_5 px-4 py-1")}>1000Gram</span>
                </div>
              </div>
              <div className={cx("col-span-12","grid grid-cols-12 gap-","py-2")}>
                <div className={cx("col-span-3")}>
                  <span className={cx("font-semibold text-c_text_sz_body")}>Kondisi</span>
                </div>
                <div className={cx("col-span-9")}>
                  <span className={cx("font-semibold text-c_text_sz_body","rounded-md border border-c_gray_5 px-4 py-1")}>Baru</span>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("col-span-12","grid grid-cols-12 gap-","py-2","divide-y-0")}>
            <div className={cx("col-span-3")}>
              <span className={cx("font-semibold text-c_text_sz_body text-c_gray_3")}>Keterangan Produk</span>
            </div>
            <div className={cx("col-span-9","")}>
              <span className={cx("font-semibold text-c_text_sz_body")}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea perferendis incidunt cum fugiat odio, itaque sed laboriosam iusto, eaque distinctio temporibus, atque repudiandae cupiditate obcaecati assumenda aliquam? Praesentium, officia!
              </span>
            </div>
            <div className={cx("col-span-12","grid grid-cols-12 gap-8","pt-8 md:pt-4")}>
              <div className={cx("col-span-6")}>
                <button onClick={()=>'ok'} type="button" 
                className={cx(
                  "btn-tambah-keranjang"
                )}>Tambah Keranjang</button>
              </div>
              <div className={cx("col-span-6","")}>
                <button onClick={()=>'ok'} type="button" 
                className={cx(
                  "btn-beli-sekarang"
                )}>beli Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )


    return Main
  
  }
}

CardProductDetail.propTypes = {
  data: propTypes.array.isRequired,
}

CardProductDetail.defaultProps = {
  data: []
}

export default CardProductDetail