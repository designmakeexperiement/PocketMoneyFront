import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import "../../style/main.scss";
import Nav from './nav';
import Home from '../containers/home';
import ExpenseNew from '../containers/expense_new';
import Calendar from '../containers/calendar';

export default class App extends Component {
  render () {
      return (
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/expense/new" component={ExpenseNew}/>
            <Route exact path="/calendar" component={Calendar}/>
          </Switch>
        </div>
      );
  }
}

//http://intljusticemission.github.io/react-big-calendar/examples/index.html