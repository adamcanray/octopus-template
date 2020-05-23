import React, { Component } from 'react'
import cx from 'classnames'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import './LandingPage.scss'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardNewService from '../../components/CardNewService/CardNewService'
import CardProduct from '../../components/CardProduct/CardProduct'
import Card from '../../components/Card/Card'
import SliderImage1 from '../../images/slider-image-1.jpg'
import SliderImage2 from '../../images/slider-image-2.jpg'
import SliderImage3 from '../../images/slider-image-3.jpg'
import ProductImage1 from '../../images/product-image-1.jpg'
import ProductImage2 from '../../images/product-image-2.jpg'
import ProductImage3 from '../../images/product-image-3.jpg'

class LandingPage extends Component {
  render() {
    const images = [
      {
        index: 4,
        // url: 'https://fakeimg.pl/250x125/00ff00',
        url: SliderImage1,
        title: 'Kebun Teh',
        subTitle: 'Bandung, Jawa barang'
      },
      {
        index: 5,
        url: SliderImage2,
        title: 'Panen Cabai',
        subTitle: 'Magelang, Jawa Tengah'
      },
      {
        index: 6,
        url: SliderImage3,
        title: 'Panen Apel',
        subTitle: 'Malang, Jawa Timur'
      },
    ]
    const newService = [
      {
        title: 'ini title',
        subTitle: 'sub title',
        buttonText: 'ini button text',
        bgClass: 'c_card_new_service_bg_1',
      },
      {
        title: 'ini title',
        subTitle: 'sub title',
        buttonText: 'ini button text',
        bgClass: 'c_card_new_service_bg_2',
      },
      {
        title: 'ini title',
        subTitle: 'sub title',
        buttonText: 'ini button text',
        bgClass: 'c_card_new_service_bg_1',
      },
    ]
    const newProducts = [
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk Panjang Banget (Test React Truncate)',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1,
          totalReview: 11
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1.5,
          totalReview: 7
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage3,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 3.5,
          totalReview: 35
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 2,
          totalReview: 9
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 4.5,
          totalReview: 200
        },
        productLocation: 'Lokasi Product',
      },
    ]
    const mostWantedProducts = [
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1,
          totalReview: 11
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1.5,
          totalReview: 7
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage3,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 3.5,
          totalReview: 35
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 2,
          totalReview: 9
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 4.5,
          totalReview: 200
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1,
          totalReview: 11
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1.5,
          totalReview: 7
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage3,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 3.5,
          totalReview: 35
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 2,
          totalReview: 9
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 4.5,
          totalReview: 200
        },
        productLocation: 'Lokasi Product',
      },
    ]
    const recommendedProducts = [
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1,
          totalReview: 11
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1.5,
          totalReview: 7
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage3,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 3.5,
          totalReview: 35
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 2,
          totalReview: 9
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 4.5,
          totalReview: 200
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1,
          totalReview: 11
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1.5,
          totalReview: 7
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage3,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 3.5,
          totalReview: 35
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 2,
          totalReview: 9
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 4.5,
          totalReview: 200
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1,
          totalReview: 11
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1.5,
          totalReview: 7
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage3,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 3.5,
          totalReview: 35
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 2,
          totalReview: 9
        },
        productLocation: 'Lokasi Product',
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 4.5,
          totalReview: 200
        },
        productLocation: 'Lokasi Product',
      },
    ]
    const searchResultProducts = [
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk Panjang Banget (Test React Truncate)',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1,
          totalReview: 11
        },
        productLocation: 'Lokasi Product',
        button: true,
        buttonText: 'Tambah ke Keranjang'
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 1.5,
          totalReview: 7
        },
        productLocation: 'Lokasi Product',
        button: true,
        buttonText: 'Tambah ke Keranjang'
      },
      {
        imgUrl: ProductImage3,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 3.5,
          totalReview: 35
        },
        productLocation: 'Lokasi Product',
        button: true,
        buttonText: 'Tambah ke Keranjang'
      },
      {
        imgUrl: ProductImage2,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 2,
          totalReview: 9
        },
        productLocation: 'Lokasi Product',
        button: true,
        buttonText: 'Tambah ke Keranjang'
      },
      {
        imgUrl: ProductImage1,
        productName: 'Nama Produk',
        productPrice: 'Harga Produk',
        productRating: {
          rating: 4.5,
          totalReview: 200
        },
        productLocation: 'Lokasi Product',
        button: true,
        buttonText: 'Tambah ke Keranjang'
      },
    ]
    return (
      <div className={cx("container")}>
        <div className={cx("w-full","hidden md:block")}>
          <SliderComponent
            images={images}
          />
        </div>
        <div className={cx("mt-12","w-full")}>
          <div className={cx("text-c_text_sz_h_large","font-bold")}>Layanan Terbaru</div>
          <div className={cx("flex flex-wrap justify-center","")}>
            {
              newService.map((item,index)=>{
                return (
                  <CardNewService 
                    key={index}
                    title={item.title}
                    subTitle={item.subTitle}
                    buttonText={item.buttonText}
                    bgClass={item.bgClass}
                  />
                )
              })
            }
          </div>
        </div>
        <div className={cx("mt-12")}>
          <div className={cx("flex justify-between items-end")}>
            <div className={cx("text-c_text_sz_h_large","font-bold")}>Produk Terbaru</div>
            <div className={cx("text-c_text_sz_h_reguler hover:text-c_gray_3","font-bold","pr-16")}>
              <Link to='/redirect'>Lihat semua</Link>
            </div>
          </div>
          <div className={cx("custome-scrollbar","flex justify-start lg:flex-wrap lg:justify-center","overflow-x-auto lg:overflow-x-auto")}>
            {
              newProducts.map((item,index)=>{
                return (
                  <CardProduct
                    key={index}
                    imgUrl={item.imgUrl}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    productRating={item.productRating}
                    productLocation={item.productLocation}
                  />
                )
              })
            }
          </div>
        </div>
        <div className={cx("mt-12")}>
          <div className={cx("flex justify-between items-end")}>
            <div className={cx("text-c_text_sz_h_large","font-bold")}>Paling Banyak Dicari</div>
            <div className={cx("text-c_text_sz_h_reguler hover:text-c_gray_3","font-bold","mr-16")}>
              <Link to='/redirect'>Lihat semua</Link>
            </div>
          </div>
          <div className={cx("custome-scrollbar","flex justify-start lg:flex-wrap lg:justify-center","overflow-x-auto lg:overflow-x-auto")}>
            {
              mostWantedProducts.map((item,index)=>{
                return (
                  <CardProduct
                    key={index}
                    imgUrl={item.imgUrl}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    productRating={item.productRating}
                    productLocation={item.productLocation}
                  />
                )
              })
            }
          </div>
        </div>
        <div className={cx("mt-12")}>
          <div className={cx("flex justify-between items-end")}>
            <div className={cx("text-c_text_sz_h_large","font-bold")}>Rekomendasi Untukmu</div>
            <div className={cx("text-c_text_sz_h_reguler hover:text-c_gray_3","font-bold","mr-16")}>
              <Link to='/redirect'>Lihat semua</Link>
            </div>
          </div>
          <div className={cx("custome-scrollbar","flex justify-start lg:flex-wrap lg:justify-center","overflow-x-auto lg:overflow-x-auto")}>
            {
              recommendedProducts.map((item,index)=>{
                return (
                  <CardProduct
                    key={index}
                    imgUrl={item.imgUrl}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    productRating={item.productRating}
                    productLocation={item.productLocation}
                  />
                )
              })
            }
          </div>
        </div>
        <div className={cx("mt-12")}>
          <div className={cx("flex justify-between items-end")}>
            <div className={cx("text-c_text_sz_h_large","font-bold")}>Layanan Lainnya</div>
          </div>
          <div className={cx("grid grid-cols-10 sm:grid-cols-8 gap-4","")}>
            <div className={cx("col-span-10 sm:col-span-4")}>
              <Card 
                title={'Mau Produk Kamu Tampil Disini? Coba buka toko GRATIS!'}
                subTitle={'Aladin Store membantu menjual produkmu lebih mudah dan cepat'}
                buttonText={'Buka Toko'}
                wrapperClass={'max-w-xl py-8 px-2'}
                mainClass={'flex flex-col shadow-md rounded-xl px-4 py-4'}
                subMainOneClass={''}
                titleClass={'text-c_text_sz_h_large text-c_gray_1 font-bold leading-tight'}
                subTitleClass={'text-c_text_sz_body text-black pt-4 pb-4'}
                subMainTwoClass={''}
                buttonClass={'text-c_text_sz_body text-c_gray_5 bg-c_orange_2 font-semibold rounded-md py-4 px-8'}
              />
            </div>
            <div className={cx("col-span-10 sm:col-span-4 h-56 sm:h-full","player-wrapper","")}>
              <ReactPlayer 
                className={cx("react-player bg-blue-40")} 
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                width={'100%'}
                height={'100%'}
              />
            </div>
          </div>
        </div>
        <div className={cx("mt-12")}>
          <div className={cx("flex justify-between items-end")}>
            <div className={cx("text-c_text_sz_h_large","font-bold")}>Hasil pencarianmu</div>
          </div>
          <div className={cx("custome-scrollbar","flex justify-start lg:flex-wrap lg:justify-center","overflow-x-auto lg:overflow-x-auto")}>
            {
              searchResultProducts.map((item,index)=>{
                return (
                  <CardProduct
                    key={index}
                    imgUrl={item.imgUrl}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    productRating={item.productRating}
                    productLocation={item.productLocation}
                    button={item.button}
                    buttonText={item.buttonText}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}


export default LandingPage