import React, {Component} from 'react';
import {Link} from 'react-router-dom';



export default class Home extends Component {
  render () {
      return (
        <div>
          <div className="homeCircle">
            <Link to="/expense/new">
              <h1>Home</h1>
            </Link>
          </div>       
        </div>
      );
  }
}