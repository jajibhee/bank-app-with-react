import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import {decrement, increment} from './actions'
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  decrement = (e) =>{    
    const amount = e.target.dataset.amount
    // this.props.dispatch({type: 'DECREMENT', amount});
    this.props.decrement(amount)
  }

  increment = (e) =>{
    const amount= e.target.dataset.amount
    this.props.increment(amount)
  }
  render() {
    const { totalAmount, username } = this.props;
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "₦" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000"  onClick={this.decrement}>WITHDRAW $10,000</button>
          <button data-amount="10000"  onClick={this.increment}>SAVE $10,000</button>
          <button data-amount="5000" onClick={this.decrement}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway" onClick={this.decrement} data-amount={totalAmount}>Give away all your cash to charity</p>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    totalAmount: state.totalAmount,
    username: state.username
  }
}

const mapDispatchToProps = {
  decrement,
  increment
}
    
  
export default connect (mapStateToProps, mapDispatchToProps)(App);
