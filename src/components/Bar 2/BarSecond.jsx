import React from 'react'
import './BarSecond.css'

const BarSecond = () => {
  return (
    <div className="bar2-cont">
    <div className="bar2-main">
      <div className="heading-cont2">
        <p className="primary-heading2">daily training completions</p>
        <p className="secondary-heading2">last 7 days</p>
      </div>
      <div className="bar-chart2">
        <div className="y-axis2">
          <ul>
            <li>160</li>
            <li>120</li>
            <li>80</li>
            <li>40</li>
            <li>0</li>
          </ul>
        </div>
        <div className="chart2">
          <div className="chart-cont2">
            <div class="progress2">
              <div class="progress-value2" id='val-1'></div>
            </div>
            <p>S</p>
          </div>
          <div className="chart-cont2">
            <div class="progress2">
              <div class="progress-value2" id='val-2'></div>
            </div>
            <p>M</p>
          </div>
          <div className="chart-cont2">
            <div class="progress2">
              <div class="progress-value2" id='val-3'></div>
            </div>
            <p>T</p>
          </div>
          <div className="chart-cont2">
            <div class="progress2">
              <div class="progress-value2" id='val-4'></div>
            </div>
            <p>W</p>
          </div>
          <div className="chart-cont2">
            <div class="progress2">
              <div class="progress-value2" id='val-5'></div>
            </div>
            <p>T</p>
          </div>
          <div className="chart-cont2">
            <div class="progress2">
              <div class="progress-value2" id='val-6'></div>
            </div>
            <p>F</p>
          </div>
          <div className="chart-cont2">
            <div class="progress2">
              <div class="progress-value2" id='val-7'></div>
            </div>
            <p>S</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BarSecond