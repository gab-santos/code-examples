import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h2>Você tem {this.props.count} counters.</h2>
      </div>
    );
  }
}
