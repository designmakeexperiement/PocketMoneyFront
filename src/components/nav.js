import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';



export default class Nav extends Component {
  render () {
      return (
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/expense/new">Enter Expense</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>          
        </div>
      );
  }
}