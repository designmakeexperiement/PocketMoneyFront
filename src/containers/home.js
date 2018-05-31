import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../../style/home.scss";



export default class Home extends Component {
  render () {
      return (
        <div>
          <div >
              <Link to="/expense/new">
              <div id="homeCircle">
                <span className="homeCircleData">
                  Enter Expense
                </span>
              </div>
            </Link>
          </div>       
        </div>
      );
  }
}