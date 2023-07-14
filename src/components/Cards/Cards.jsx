import React from 'react'
import './Cards.css'


import trendUp from '../../assets/trend-up.svg'
import trendDown from '../../assets/trend-down.svg'
import chartGreen from '../../assets/chart-green.svg'
import chartRed from '../../assets/chart-red.svg'

const Cards = () => {
  return (
    <div className="cards-cont">
        <div className="card-left">
            <div className="card">
                <h1 className='card-heading'>In Training Workers</h1>
                <div className="data">
                    <h3 className='neumeral'>3,354</h3>
                    <div className="sub-data">
                        <div className="perc-cont">
                            <img src={trendUp} alt="" />
                            <p>20%</p>
                        </div>
                        <div className="sec-data">
                            <p>234</p>
                        </div>
                    </div>
                </div>
                <div className="line-chart">
                    <img src={chartGreen} alt="" />
                </div>  
            </div>

            <div className="card">
                <h1 className='card-heading'>Video Watch Time (Hrs)</h1>
                <div className="data">
                    <h3 className='neumeral'>2,433</h3>
                    <div className="sub-data">
                        <div className="perc-cont" id='red-one'>
                            <img src={trendDown} alt="" />
                            <p id='red-text'>20%</p>
                        </div>
                        <div className="sec-data">
                            <p>435</p>
                        </div>
                    </div>
                </div>
                <div className="line-chart">
                    <img src={chartRed} alt="" />
                </div>  
            </div>   
        </div>
        <div className="card-right">
            <div className="card">
                <h1 className='card-heading'>% Workers passing Quiz</h1>
                <div className="data">
                    <h3 className='neumeral'>95%</h3>
                    <div className="sub-data">
                        <div className="perc-cont">
                            <img src={trendUp} alt="" />
                            <p>20%</p>
                        </div>
                        <div className="sec-data">
                            <p>24%</p>
                        </div>
                    </div>
                </div>
                <div className="line-chart">
                    <img src={chartGreen} alt="" />
                </div>  
            </div>

            <div className="card">
                <h1 className='card-heading'>Avg. Days Taken</h1>
                <div className="data">
                    <h3 className='neumeral'>6</h3>
                    <div className="sub-data" id='s-data'>
                        <div className="perc-cont" id='s-pc'>
                            <img src={trendUp} alt="" />
                            <p>20%</p>
                        </div>
                        <div className="sec-data">
                            <p>3</p>
                        </div>
                    </div>
                </div>
                <div className="line-chart">
                    <img src={chartGreen} alt="" />
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Cards