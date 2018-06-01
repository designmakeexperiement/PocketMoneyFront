import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

var array = [{date: '2016-01-13'}]

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const Calendar = props => (
  <div>
    <BigCalendar
      events={array}
      startAccessor='2016-01-01'
      endAccessor='2016-01-31'
      views={allViews}
    />
  </div>
);


// export default class Calendar extends Component {
//   render () {
//       return (
//         <div>
//           <div>
//             <h1>sup</h1>
//           </div>       
//         </div>
//       );
//   }
// }

export default Calendar;