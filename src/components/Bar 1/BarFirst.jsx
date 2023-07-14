import React from 'react'
import './BarFirst.css'

const Bar = () => {
  return (
    <div className="bar-cont">
      <div className="bar-main">
        <div className="heading-cont">
          <p className="primary-heading">last 14 days active workers in training</p>
          <p className="secondary-heading">last 14 days</p>
        </div>
        <div className="bar-chart">
          <div className="y-axis">
            <ul>
              <li>400</li>
              <li>300</li>
              <li>200</li>
              <li>100</li>
              <li>0</li>
            </ul>
          </div>
          <div className="chart">
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-1'></div>
              </div>
              <p>3 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-2'></div>
              </div>
              <p>4 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-3'></div>
              </div>
              <p>5 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-4'></div>
              </div>
              <p>6 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-5'></div>
              </div>
              <p>7 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-6'></div>
              </div>
              <p>8 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-7'></div>
              </div>
              <p>9 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-8'></div>
              </div>
              <p>10 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-9'></div>
              </div>
              <p>11 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-10'></div>
              </div>
              <p>12 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-11'></div>
              </div>
              <p>13 Jun</p>
            </div>
            <div className="chart-cont">
              <div class="progress">
                <div class="progress-value" id='value-12'></div>
              </div>
              <p>14 Jun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar