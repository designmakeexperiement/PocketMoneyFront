import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


BigCalendar.momentLocalizer(moment);

const MyCalendar = props => (
  <div>
    <BigCalendar
      events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);


export default class Calendar extends Component {
  render () {
      return (
        <div>
          <div>
            <h1>sup</h1>
          </div>       
        </div>
      );
  }
}