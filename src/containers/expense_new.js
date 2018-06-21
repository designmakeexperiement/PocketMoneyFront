import React, {Component} from 'react';
import "../../style/home.scss";
import axios from "axios";

class ExpenseNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseAmount: '',
      // expenseTag: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({expense: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("!!!!!!!")
    //USER NUMBER HARDCODED!!! CHANGE WHEN APP SECURED
    var dateNow = Date.now();
    var expenseAmount = this.state.expenseAmount;
    //sending options to this route and can't get in (need to send a post reqest)
    axios.post('http://localhost:3000/api/v1/expenses', {
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': process.env.API_EMAIL,
        'Authorization': "Token token=2DIZtXI9bZL/Pg=="
      },
      params: {
        date: dateNow,
        amount: expenseAmount,
        user_id: '1'
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // debugger
      // this.setState({ pocketMoney: pocketMoney });
    alert('You spent: ' + this.state.expenseAmount);
  }

  render () {
      return (
        <form onSubmit={this.handleSubmit} className="centerCircle centerForm">
          <div className="expenseArea">
            <label className="expenseField">
              Amount:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            click if income
            <input type="submit" value="Submit" className="expenseField" />
          </div>
        </form>
      );
  }
}


export default ExpenseNew;