import React from 'react'
import './Donut.css'

const Donut = () => {
  return (
    <div className="donut-cont">
      <h1 className="quiz-heading">quiz passing %</h1>
      <div className="donut-box">
        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        <div className="donut-values-box">
          <div className="values">
            <div className="circle-clr" id="circle-clr-1"></div>
            <div className="text">
              <h3>passed</h3>
              <p>1423 Workers</p>
            </div>
          </div>
          <div className="values">
            <div className="circle-clr" id="circle-clr-2"></div>
            <div className="text">
              <h3>failed</h3>
              <p>134 Workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donut