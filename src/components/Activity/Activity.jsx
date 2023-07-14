import React from 'react'
import './Activity.css'

import ArrowUp from '../../assets/Arrow-up.svg'

const Activity = () => {
  return (
    <div className="act-cont">
      <h1 className="act-heading">monthly training activity</h1>
      <div className="act-sub-heading">
        <img src={ArrowUp} alt="" />
        <p>16% more enrollees this month</p>
      </div>

      <div className="courses">
        <div className="course-cont" id='cs-1'>
          <div className="bullet"></div>
          <div className="course-data">
            <h4>Course a</h4>
            <p>253 workers took this course this week</p>
          </div>
        </div>
        <div className="course-cont" id='cs-2'>
          <div className="bullet"></div>
          <div className="course-data">
            <h4>Course b</h4>
            <p>253 workers took this course this week</p>
          </div>
        </div>
        <div className="course-cont" id='cs-3'>
          <div className="bullet"></div>
          <div className="course-data">
            <h4>Course c</h4>
            <p>253 workers took this course this week</p>
          </div>
        </div>
        <div className="course-cont" id='cs-4'>
          <div className="bullet"></div>
          <div className="course-data">
            <h4>Course d</h4>
            <p>253 workers took this course this week</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity