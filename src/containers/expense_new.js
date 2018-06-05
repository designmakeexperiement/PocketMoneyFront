import React, {Component} from 'react';
import "../../style/home.scss";

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
    console.log(this.setState({expense: event.target.value}));
  }

  handleSubmit(event) {
    alert('You spent: ' + this.state.expenseAmount);
    event.preventDefault();
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