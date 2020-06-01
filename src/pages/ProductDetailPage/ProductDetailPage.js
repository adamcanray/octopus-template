/*
* Landing Page its Like Login Page
*  
*/ 

import React, { Component } from 'react'
import cx from 'classnames'
import {withRouter} from 'react-router-dom'
import Rating from 'react-rating'
import {ReactComponent as IconStartDim} from 'icons/icon-star-dim-1.svg'
import {ReactComponent as IconStartShining} from 'icons/icon-star-shining-1.svg'
import {ReactComponent as IconMinus} from 'icons/icon-minus-1.svg'
import {ReactComponent as IconPlus} from 'icons/icon-plus-1.svg'
import Img1 from 'images/product-image-1.jpg'

class ProductDetailPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      idFromRoute: '',
    }
  }
  componentWillMount(){
    /* change backgroundColor before render */
    document.body.style.backgroundColor = '#f5f5f5'
  }
  render() {
    console.log(this.props)
    // const {
    //   location,
    //   match
    // } = this.props
    return (
      <div className={cx("container")}>
        <div className={cx("bg-white rounded-md","grid grid-cols-12 gap-","py-4 px-6","min-h-104")}>
          <div className={cx("bg-red-300","col-span-12 md:col-span-4","grid grid-cols-12")}>
            <div className={cx("mb-4","relative bg-red-400","col-span-12","h-80","flex items-center")}>
              <img className={cx("absolute h-full w-full object-cover")} src={Img1} alt="gambar-1"/>
            </div>
            <div className={cx("bg-red-700","col-span-12","h-","gri grid-cols- gap-","flex ")}>
              <div className={cx("bg-blue-100 p-1 h-full w-full object-cover","col-span-4")}>
                <img src={Img1} alt="gambar-1"/>
              </div>
              <div className={cx("bg-blue-100 p-1 h-full w-full object-cover","col-span-4")}>
                <img src={Img1} alt="gambar-1"/>
              </div>
              <div className={cx("bg-blue-100 p-1 h-full w-full object-cover","col-span-4")}>
                <img src={Img1} alt="gambar-1"/>
              </div>
            </div>
          </div>
          <div className={cx("bg-red-200","col-span-12 md:col-span-8","grid grid-cols-12 gap-","divide-y divide-gray-400","ml-0 md:ml-8")}>
            <div className={cx("col-span-12","grid grid-cols-12","bg-red-700 leading-tight","py-2")}>
              <div className={cx("col-span-12","flex items-center bg-red-900")}>
                <span className={cx("font-bold text-c_text_sz_h_reguler")}>name</span>
              </div>
              <div className={cx("col-span-12","bg-red-800 flex items-center")}>
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
              <div className={cx("bg-red-300","col-span-3")}>
                <span className={cx("bg-red-400","font-semibold text-c_text_sz_body text-c_gray_3")}>Harga</span>
              </div>
              <div className={cx("bg-red-400","col-span-9")}>
                <span className={cx("bg-red-300","font-bold text-c_text_sz_h_large text-c_orange_1")}>Rp. 40.000</span>
              </div>
            </div>
            <div className={cx("col-span-12","grid grid-cols-12 gap-","py-2")}>
              <div className={cx("col-span-3")}>
                <span className={cx("font-semibold text-c_text_sz_body text-c_gray_3")}>Jumlah</span>
              </div>
              <div className={cx("col-span-9","bg-red-700 flex items-center")}>
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
              <div className={cx("col-span-9","grid grid-cols-12 gap-","bg-red-600")}>
                <div className={cx("col-span-12","grid grid-cols-12","bg-red-500 py-2")}>
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
              <div className={cx("col-span-12","grid grid-cols-12 gap-8","pt-2")}>
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
      </div>
    )
  }
}

export default withRouter(ProductDetailPage)