import React from 'react'
import './Dashboard.css'

import Cards from '../Cards/Cards'
import BarFirst from '../Bar 1/BarFirst'
import PieFirst from '../Pie 1/PieFirst'
import Activity from '../Activity/Activity'
import Donut from '../Donut chart/Donut'
import BarSecond from '../Bar 2/BarSecond'

import chaabiLogo from '../../assets/logo.svg'
import dashBoardIcon from '../../assets/Category.svg'
import gameIcon from '../../assets/Game.svg'
import ticketIcon from '../../assets/Ticket.svg'
import locationIcon from '../../assets/Location.svg'
import header from '../../assets/header.svg'

const Dashboard = () => {
  return (
    <div className="main">
        <div className="left">
            <div className="lc">
            <div className="logo-cont">
                <img className="logo" src={chaabiLogo} alt="chaabi-logo" />
            </div>
            <div className="nav-cont">
           <div className="nav-items">
              <ul>
                <li>
                  <a href="#" className='links active'><img src={dashBoardIcon} alt="dashbord-icon" /> Dashboard</a>
                </li>
                <li>
                  <a href="#" className='links'><img src={gameIcon} alt="training-icon" />Trainings</a>
                </li>
                <li>
                  <a href="#" className='links'><img src={ticketIcon} alt="user-icon" />Users</a>
                </li>
                <li>
                  <a href="#" className='links'><img src={locationIcon} alt="analytics-icon" />Analytics</a>
                </li>
                <li>
                  <a href="#" className='links'><img src={locationIcon} alt="account-icon" />My Account</a>
                </li>
                <li>
                  <a href="#" className='links'><img src={locationIcon} alt="support-icon" />Support</a>
                </li>
              </ul>
            </div>
           </div>
            </div>
        </div>
        <div className="right">
            <div className="h-cont">
              <h1 className='heading'>Hello, Puneet Dhiman</h1>
              <p className='sub-heading'>following is your organization’s performance summary</p>
            </div>
            <div className="top-sec">
            <Cards />
            </div>
            <div className="middle-sec">
              <div className="middle-left"><PieFirst /></div>
              <div className="middle-right"><BarFirst /></div>
            </div>
            <div className="bottom-sec">
                <div className="bottom-left">
                  <Activity />
                  <Donut />
                </div>
                <div className="bottom-right">
                  <BarSecond />
                </div>
            </div>
            <div className="logo-for-mobile">
              <img className="m-logo" src={chaabiLogo} alt="chaabi-logo" />
            </div>
        </div>
    </div>
  )
}

export default Dashboard