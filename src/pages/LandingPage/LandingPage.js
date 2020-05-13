import React, { Component } from 'react'
import cx from 'classnames'
import './LandingPage.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import {pageWithSidebar} from '../mock.cssconfig'

export default class LandingPage extends Component {
  render() {
    return (
      <div className={cx(pageWithSidebar)}>
        <Sidebar />
        <div className={cx("w-full","bg-red-400")}>
          <div className={cx("container")}>
            <h1>
              i am landing page
            </h1>
          </div>
        </div>
      </div>
    )
  }
}
