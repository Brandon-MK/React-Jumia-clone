import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Fire from "./firebase";
class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (event) => {
    Fire.auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        console.log("it worked");
      })
      .catch((e) => {
        console.log(e);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ backgroundColor: "orange" }}>
        <nav className="navbar sticky-top navbar-light bg-light col fixed">
          <div class="row" sty>
            <div style={{ fontSize: 28, marginLeft: 20 }}>Forgot Password</div>
          </div>
        </nav>
        <div>
          <div
            style={{
              marginTop: 70,
            }}
          >
            <div
              class="card border mb-3"
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 300,
                width: 600,
                marginLeft: 400,
              }}
            >
              <div class="input-group " style={{ width: 500, marginTop: 20 }}>
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Enter your Email"
                  aria-label="Username"
                  value={this.state.email}
                  onChange={this.handleChange}
                  aria-describedby="basic-addon1"
                />
              </div>

              <button
                class="btn btn-primary"
                type="submit"
                onClick={this.submit}
                style={{ marginTop: 60, width: 500 }}
              >
                Send code
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgot;
