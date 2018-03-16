import React, { Component } from "react";
import calculatorImg from "../../calculator.png";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      header: "Calculator",
      display: "0",
      operator: "",
      temp: 0,
      resetDisplay: false
    };

    this.updateHeader = this.updateHeader.bind(this);
  }

  updateHeader(val) {
    this.setState({
      header: val
    });
  }

  render() {
    return (
      <div id="calculator-container">
        <input
          id="header-input"
          onChange={e => this.updateHeader(e.target.value)}
        />
        <h1 id="header"> {this.state.header} </h1>
        <img
          className="remove-highlight"
          src={calculatorImg}
          alt="calculator"
        />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total" />
          </div>

          <div className="btn clear" />

          <div className="btn zero" />
          <div className="btn one" />
          <div className="btn two" />
          <div className="btn three" />
          <div className="btn four" />
          <div className="btn five" />
          <div className="btn six" />
          <div className="btn seven" />
          <div className="btn eight" />
          <div className="btn nine" />

          <div className="btn equal" />
          <div className="btn multiply" />
          <div className="btn divide" />
          <div className="btn subtract" />
          <div className="btn add" />
        </div>
      </div>
    );
  }
}

export default Calculator;
