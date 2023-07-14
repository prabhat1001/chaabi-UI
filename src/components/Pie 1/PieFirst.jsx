import React from "react";
import "./PieFirst.css";

import pieChart from "../../assets/Pie.svg";

const PieFirst = () => {
  return (
    <div className="pie-cont">
      <div className="pie-main">
          <h1 className="pie-heading">chapter wise status</h1>
          <div className="pie-chart">
            <img src={pieChart} alt="" className="pieImg" />
            <div className="pie-data-cont">
              <div className="pie-data-cont-left" id="data-lft">
                <div className="items">
                  <div className="clr-bullet" id="clr-1"></div>
                  <p className="item-text">finished training</p>
                </div>
                <div className="items">
                  <div className="clr-bullet" id="clr-2"></div>
                  <p className="item-text">chapter B</p>
                </div>
                <div className="items">
                  <div className="clr-bullet" id="clr-3"></div>
                  <p className="item-text">Haven't started yet</p>
                </div>
              </div>
              <div className="pie-data-cont-right" id="data-rgt">
                <div className="items">
                  <div className="clr-bullet" id="clr-4"></div>
                  <p className="item-text">chapter A</p>
                </div>
                <div className="items">
                  <div className="clr-bullet" id="clr-5"></div>
                  <p className="item-text">chapter C</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PieFirst;
