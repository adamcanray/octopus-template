import React, { Component } from 'react'
import cx from 'classnames'
import './LandingPage.scss'
import SliderComponent from '../../components/SliderComponent/SliderComponent'

export default class LandingPage extends Component {
  render() {
    return (
      <div className={cx("container")}>
        <div className={cx("block w-full")}>
          <SliderComponent
            images={[
              {
                index: 0,
                url: 'https://fakeimg.pl/600x300/ff0000',
                title: 'Panen Apel',
                subTitle: 'Malang, Jawa Timur'
              },
              {
                index: 1,
                url: 'https://fakeimg.pl/300x150/0000ff',
                title: 'Perkebunan Teh',
                subTitle: 'Bandung, Jawa Barat'
              },
              {
                index: 2,
                // url: 'https://fakeimg.pl/250x125/00ff00',
                url: 'https://fakeimg.pl/520x260/00ff00',
                title: 'Panen Cabai',
                subTitle: 'Magelang, Jawa Tengah'
              },
            ]}
          />
        </div>
        <div className={cx("w-full","")}>
          <div className={cx("")}>
            <h1>
              i am landing page
            </h1>
          </div>
        </div>
      </div>
    )
  }
}
