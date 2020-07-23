import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.text);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light col">
          <div class="row" sty>
            <div class="col-*-*">
              <a
                className="navbar-brand"
                href="#"
                style={{
                  color: "orange",
                  marginLeft: 20,
                  fontWeight: "bold",
                }}
              >
                <img src="./inag.ico" />
              </a>
            </div>
            <div
              class="col-*-*"
              style={{
                marginLeft: 100,
                width: 600,
                top: 5,
              }}
            >
              <input
                className="form-control input-lg "
                id="inputlg"
                type="text"
                placeholder="Search for products"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </div>
            <button
              className="btn btn-warning btn-md "
              style={{ top: 5 }}
              onClick={this.handleSubmit}
            >
              Search
            </button>
            <button
              class="btn btn-info dropdown-toggle"
              type="button"
              id="menu1"
              data-toggle="dropdown"
              style={{ marginLeft: 40 }}
            >
              User
              <span class="caret"></span>
            </button>
          </div>
          <button
            class="btn btn-info dropdown-toggle"
            type="button"
            id="menu1"
            data-toggle="dropdown"
          >
            Tutorials
            <span class="caret"></span>
          </button>
          <Link to="/about">
            <button
              class="btn btn-info"
              type="button"
              id="menu1"
              data-toggle="dropdown"
              style={{ marginLeft: -20 }}
            >
              <FontAwesomeIcon icon={["fab", "shopping-cart"]} />
              <span className="badge badge-pill badge-secondary">5</span>
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Home;
