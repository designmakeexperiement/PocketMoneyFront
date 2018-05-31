import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/navbar.css";



export default class Nav extends Component {
  render () {
      return (
        <div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/expense/new">Enter Expense</NavLink>
            <NavLink to="/calendar">Calendar</NavLink> 
            <NavLink to="/signout">Sign Out</NavLink>                    
          </nav>
        </div>
      );
  }
}