import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../../style/home.scss";
import OutsideCircle from "../components/outside_circle.js";



export default class Home extends Component {
  render () {
      return (
        <div>
            <Link to="/expense/new">
            <div id="homeCircle" className="centerCircle">
            <OutsideCircle  />
              <div className="homeCircleData">
                $5,241
              </div>
            </div>
          </Link>
        </div>
      );
  }
}