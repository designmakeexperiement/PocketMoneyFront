import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../../style/home.scss";
import axios from "axios";


// axios.get('http://localhost:3000/api/v1/accounts/1')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pocketMoney: [props.pocketMoney]
      pocketMoney: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/accounts/1`)
      .then(res => {
        const pocketMoney = res.data.pocket_money;
        this.setState((prevState) => {
          return {pocketMoney: pocketMoney};
        });
        // this.setState({ pocketMoney: pocketMoney });
      })
  }

  render () {
      return (
        <div>
            <Link className="centerCircle" to="/expense/new">
              <div className="homeCircle centerCircle">
                <div className="homeCircleData">
                    ${this.state.pocketMoney}
                </div>
              </div>
            </Link>
              <div className="outsideCircle centerCircle">
                <span className="char1">c</span>
                <span className="char2">l</span>
                <span className="char3">i</span>
                <span className="char4">c</span>
                <span className="char5">k</span>
                <span className="char6"> </span>
                <span className="char7">h</span>
                <span className="char8">e</span>
                <span className="char9">a</span>
                <span className="char10">r</span>
                <span className="char11"> </span>
                <span className="char12">t</span>
                <span className="char13">o</span>
                <span className="char14"> </span>
                <span className="char15">a</span>
                <span className="char16">d</span>
                <span className="char17">d</span>
                <span className="char18"> </span>
                <span className="char19">e</span>
                <span className="char20">x</span>
                <span className="char21">p</span>
                <span className="char22">e</span>
                <span className="char23">n</span>
                <span className="char24">s</span>
                <span className="char25">e</span>
            </div>
        </div>
      );
  }
}