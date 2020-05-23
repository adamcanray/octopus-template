import React, {Component} from 'react';
import cx from 'classnames';
import {Link} from 'react-router-dom';

class Body extends Component {
  render(){
    const titleColOne = process.env.REACT_APP_NAME_STORE
    const listColOne = [
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/about',
        text: `tentang ${process.env.REACT_APP_NAME_STORE}`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Blog`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Penjual di ${process.env.REACT_APP_NAME_STORE}`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Aplikasi ${process.env.REACT_APP_NAME_STORE}`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Tentang ${process.env.REACT_APP_NAME_STORE}`,
      },
    ]
    const titleColTwo = `Policies`
    const listColTwo = [
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/about',
        text: `Syarat dan Ketentuan`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Kebijakan Keamanan`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Opsi Pembayaran`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Kebijakan Pengiriman`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Kebijakan Pengembalian Barang`,
      },
    ]
    const titleColThree = `Bantuan`
    const listColThree = [
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/about',
        text: `FAQ's`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Layanan Konsumen`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Pembayaran`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Pengiriman`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Pengembalian Barang dan Uang`,
      },
      {
        className: 'text-c_text_sz_body pt-2 opacity-75 hover:opacity-50',
        linkTo: '/blog',
        text: `Lacak Pengiriman`,
      },
    ]
    const titleColFour = `Profile Kami`
    return (
      <div className={cx("border-c_gray_4 border-t border-b"," mt-12 pt-10 pb-4 mb-10")}>
        <div className={cx("container")}>
        <div className={cx("grid grid-cols-9 sm:grid-cols-8 gap-4")}>
          <div className={cx("col-span-3 sm:col-span-2 bg-gray-0","")}>
            <div className={cx("font-bold text-c_gray_1 c_text_sz_h_reguler")}>{titleColOne}</div>
            <div className={cx("pt-2")}>
              <ul>
                {
                  listColOne.map((item,index) => {
                    return (
                      <li key={index} className={cx(item.className)}>
                        <Link to={item.linkTo}>{item.text}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className={cx("col-span-3 sm:col-span-2 bg-gray-0","")}>
            <div className={cx("font-bold text-c_gray_1 c_text_sz_h_reguler")}>{titleColTwo}</div>
            <div className={cx("pt-2")}>
              <ul>
                {
                  listColTwo.map((item,index) => {
                    return (
                      <li key={index} className={cx(item.className)}>
                        <Link to={item.linkTo}>{item.text}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className={cx("col-span-3 sm:col-span-2 bg-gray-0","")}>
            <div className={cx("font-bold text-c_gray_1 c_text_sz_h_reguler")}>{titleColThree}</div>
            <div className={cx("pt-2")}>
              <ul>
                {
                  listColThree.map((item,index) => {
                    return (
                      <li key={index} className={cx(item.className)}>
                        <Link to={item.linkTo}>{item.text}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className={cx("col-span-3 sm:col-span-2 bg-gray-0","")}>
            <div className={cx("font-bold text-c_gray_1 c_text_sz_h_reguler")}>{titleColFour}</div>
            <div className={cx("pt-2")}>
              blabla
            </div>
          </div>
        </div>
          {/* &copy;2020 Octopus Template. */}
        </div>
      </div>
    )
  }
}

export default Body