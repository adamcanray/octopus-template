/*
* Landing Page its Like Login Page
*  
*/ 

import React, { Component } from 'react'
import cx from 'classnames'
import {Link,Redirect,withRouter} from 'react-router-dom'
import ReactPlayer from 'react-player'
import jwt from 'jsonwebtoken'
import config from '../../config'
import {toDash} from '../../functions'
import './LandingPage.scss'
import {
  images,
  kategori,
  newProducts,
  mostWantedProducts,
  recommendedProducts,
  searchResultProducts,
  flashSaleProduct
} from './data'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardProduct from '../../components/CardProduct/CardProduct'
import Card from '../../components/Card/Card'

import {ReactComponent as IconRightArrow} from '../../icons/icon-right-arrow-1.svg'

class LandingPage extends Component {
  static isAuthenticated(token) {
    if (!token) return
    const date = new Date().getTime() / 1000
    const data = jwt.decode(token)
    console.log(token)
    console.log(data)
    /* allow anyone if config.isBackend still False */
    return config.isBackend?date < data.exp:true
  }
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/app" }
    } // eslint-disable-line
    if (LandingPage.isAuthenticated(localStorage.getItem("token"))) {
      return <Redirect to={from} />;
    }
    console.log(this.props)
    return (
      <div className={cx("container")}>
        <div className={cx("w-full","hidden md:block")}>
          <SliderComponent
            images={images}
          />
        </div>
        {/* <div className={cx("mt-12","w-full")}>
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
        </div> */}
        <div className={cx(
          "mt-12 shadow-c_box_shadow_2 rounded-lg p-4",
          "grid grid-cols-2 grid-rows-2 gap-0 md:gap-4"
        )}>
          <div className={cx("col-span-2 p-0")}>
            <span className={cx("font-bold text-c_text_sz_h_large")}>Kategori</span>
          </div>
          <div className={cx("col-span-2 grid grid-cols-10 gap-2 md:gap-4","pb-4")}>
            {
              kategori.map((item,index)=>{
                return (
                  <Link to={item.link} className={cx("col-span-2")}>
                    <div key={index} className={cx(
                      "c_gradient_bg_2 rounded-md","font-semibold",
                      "text-center c_text_sz_body lg:c_text_sz_h_small xl:text-c_text_sz_h_reguler text-c_gray_5","px-2 py-2",
                      "truncate"
                    )}>{item.name}</div>
                  </Link>
                )
              })
            }
          </div>
        </div>
        <div className={cx("mt-12")}>
          <div className={cx("flex justify-between items-end")}>
            <div className={cx("text-c_text_sz_h_large","font-bold")}>Flash Sale</div>
          </div>
          <div className={cx(
            "custome-scrollbar","flex justify-start lg:flex-wrap lg:justify-center",
            "overflow-x-auto lg:overflow-x-auto",
          )}>
            <CardProduct
              className={cx("px-3")}
              key={1}
              id={1}
              imgUrl={flashSaleProduct[0].imgUrl}
              link={`/${toDash('sepatu')}`}
              thisBanner={true}
              bannerTitle={'Furniture Keluaran Terbaru Cek Sebelum Kehabisan!'}
              bannerSubTitle={''}
              index={0}
            />
            {
              flashSaleProduct.map((item,index)=>{
                return (
                  <CardProduct
                    className={cx("px-3")}
                    key={index}
                    id={item.id}
                    link={`/${toDash(item.kategori.name)}/${toDash(item.productName)}`}
                    imgUrl={item.imgUrl}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    productRating={item.productRating}
                    productLocation={item.productLocation}
                    productDiscount={item.productDiscount}
                    productPriceAfterDiscount={item.productPriceAfterDiscount}
                    thisWithBanner={true}
                    thisUsePromoBadges={true}
                  />
                )
              })
            }
          </div>
        </div>
        <div className={cx("mt-12")}>
          <div className={cx("flex justify-between items-end")}>
            <div className={cx("text-c_text_sz_h_large","font-bold")}>Produk Terbaru</div>
            <div className={cx("text-c_text_sz_h_reguler","font-bold","pr-16")}>
              <Link to='/new-product'>
                <div className={cx(
                  "flex items-center",
                  "text-c_green_2 hover:text-c_green_3",
                  "stroke-c_green_2 hover:stroke-c_green_3"
                )}>
                  <span className={cx("mr-2")}>Lihat Semua</span><IconRightArrow/>
                </div>
              </Link>
            </div>
          </div>
          <div className={cx(
            "custome-scrollbar","flex justify-start lg:flex-wrap lg:justify-center",
            "overflow-x-auto lg:overflow-x-auto",
          )}>
            <CardProduct
              className={cx("px-3")}
              key={1}
              id={1}
              imgUrl={flashSaleProduct[0].imgUrl}
              link={`/${toDash('sepatu')}`}
              thisBanner={true}
              bannerTitle={'Furniture Keluaran Terbaru Cek Sebelum Kehabisan!'}
              bannerSubTitle={''}
              index={0}
            />
            {
              flashSaleProduct.map((item,index)=>{
                return (
                  <CardProduct
                    className={cx("px-3")}
                    key={index}
                    id={item.id}
                    link={`/${toDash(item.kategori.name)}/${toDash(item.productName)}`}
                    imgUrl={item.imgUrl}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    productRating={item.productRating}
                    productLocation={item.productLocation}
                    productDiscount={item.productDiscount}
                    productPriceAfterDiscount={item.productPriceAfterDiscount}
                    thisWithBanner={true}
                  />
                )
              })
            }
          </div>
        </div>
        <div className={cx("mt-12")}>
          <div className={cx("flex justify-between items-end")}>
            <div className={cx("text-c_text_sz_h_large","font-bold")}>Paling Banyak Dicari</div>
            <div className={cx("text-c_text_sz_h_reguler","font-bold","pr-16")}>
              <Link to='/most-wanted-product/'>
                <div className={cx(
                  "flex items-center",
                  "text-c_green_2 hover:text-c_green_3",
                  "stroke-c_green_2 hover:stroke-c_green_3"
                )}>
                  <span className={cx("mr-2")}>Lihat Semua</span><IconRightArrow/>
                </div>
              </Link>
            </div>
          </div>
          <div className={cx("custome-scrollbar","flex justify-start lg:flex-wrap lg:justify-center","overflow-x-auto lg:overflow-x-auto")}>
            {
              mostWantedProducts.map((item,index)=>{
                return (
                  <CardProduct
                    className={cx("px-3")}
                    key={index}
                    id={item.id}
                    link={`/${toDash(item.kategori.name)}/${toDash(item.productName)}`}
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
            <div className={cx("text-c_text_sz_h_reguler","font-bold","pr-16")}>
              <Link to='/new-product/'>
                <div className={cx(
                  "flex items-center",
                  "text-c_green_2 hover:text-c_green_3",
                  "stroke-c_green_2 hover:stroke-c_green_3"
                )}>
                  <span className={cx("mr-2")}>Lihat Semua</span><IconRightArrow/>
                </div>
              </Link>
            </div>
          </div>
          <div className={cx("custome-scrollbar","flex justify-start lg:flex-wrap lg:justify-center","overflow-x-auto lg:overflow-x-auto")}>
            {
              recommendedProducts.map((item,index)=>{
                return (
                  <CardProduct
                    className={cx("px-3")}
                    key={index}
                    id={item.id}
                    link={`/${toDash(item.kategori.name)}/${toDash(item.productName)}`}
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
          <div className={cx("grid grid-cols-8 gap-6","")}>
            <div className={cx("col-span-8 md:col-span-3","grid grid-cols-8")}>
              <div className={cx("col-span-8","mb-2")}>
                <div className={cx("","text-c_text_sz_h_large","font-bold")}>Layanan Lainnya</div>
              </div>
              <div className={cx("col-span-8 grid grid-cols-6 gap-6","")}>
                <div className={cx("col-span-6","shadow-c_box_shadow_2 rounded-lg border border-c_gray_4")}>
                  <Card 
                    horizontalCard={true}
                    title={'Mau Produk Kamu Tampil Disini? Coba buka toko GRATIS!'}
                    subTitle={'Aladin Store membantu menjual produkmu lebih mudah dan cepat'}
                    buttonText={'Buka Toko'}
                  />
                </div>
              </div>
            </div>
            <div className={cx("col-span-8 md:col-span-5","grid grid-cols-8")}>
              <div className={cx("col-span-8","mb-2")}>
                <div className={cx("text-c_text_sz_h_large","font-bold")}>Official Store</div>
              </div>
              <div className={cx("col-span-8 grid grid-cols-6 gap-6","")}>
                <div className={cx("col-span-2","shadow-c_box_shadow_2 rounded-lg border border-c_gray_4")}>
                  <Card
                    profileCard={true}
                    profileTitle={'Hendry Store'}
                    profileSubTitle={'Level : Diamond'}
                  />
                </div>
                <div className={cx("col-span-2","shadow-c_box_shadow_2 rounded-lg border border-c_gray_4")}>
                  <Card
                    profileCard={true}
                    profileTitle={'Hendry Store'}
                    profileSubTitle={'Level : Diamond'}
                  />
                </div>
                <div className={cx("col-span-2","shadow-c_box_shadow_2 rounded-lg border border-c_gray_4")}>
                  <Card
                    profileCard={true}
                    profileTitle={'Hendry Store'}
                    profileSubTitle={'Level : Diamond'}
                  />
                </div>
              </div>
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
                    className={cx("px-3")}
                    key={index}
                    id={item.id}
                    link={`/${toDash(item.kategori.name)}/${toDash(item.productName)}`}
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

export default withRouter(LandingPage)