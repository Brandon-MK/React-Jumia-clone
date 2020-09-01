import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div
        class="card"
        style={{
          alignItems: "center",
          width: 230,
          marginLeft: 30,
          marginTop: 40,
          paddingBottom: 30,
          paddingTop: 10,
        }}
      >
        <img
          src={this.props.image}
          height={this.props.height}
          width={this.props.width}
          style={{ marginTop: 10 }}
        />
        {this.props.main}
        <h6>{this.props.money}</h6>
        <div class="col-*-*">
          <button
            type="button"
            onClick={() => this.props.onIncrement(this.props.counter)}
            class="btn btn-primary"
            style={{ marginRight: 15 }}
          >
            +
          </button>
          <span className={"badge  badge-secondary"}>{this.props.numbers}</span>

          <button
            type="button"
            class="btn btn-primary"
            onClick={() => this.props.onDecrement(this.props.counter)}
            style={{ marginLeft: 15 }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Cards;
