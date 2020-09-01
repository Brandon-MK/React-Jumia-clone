import React, { Component } from "react";
import Fire from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (event) => {
    Fire.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((e) => {
        console.log(e);
      });

    Fire.database()
      .ref(this.state.username)
      .set({ Username: this.state.username })
      .catch((e) => {
        console.log(e);
      });
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <div style={{ backgroundColor: "orange" }}>
          <nav className="navbar sticky-top navbar-light bg-light col fixed">
            <div class="row">
              <div style={{ fontSize: 28, marginLeft: 20 }}>Sign Up</div>
            </div>
          </nav>
          <div
            style={{
              marginTop: 70,
              paddingBottom: 112,
            }}
          >
            <div
              class="card border mb-3"
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 400,
                width: 600,
                marginLeft: 400,
              }}
            >
              <div class="input-group " style={{ width: 500, marginTop: 50 }}>
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon="user" />
                  </span>
                </div>
                <input
                  name="username"
                  class="form-control"
                  placeholder="Enter your Username"
                  aria-label="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group " style={{ width: 500, marginTop: 50 }}>
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
              <div class="input-group" style={{ width: 500, marginTop: 50 }}>
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon="key" />
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="password"
                  placeholder="Enter your password"
                  aria-label="Username"
                  value={this.state.password}
                  onChange={this.handleChange}
                  aria-describedby="basic-addon1"
                />
              </div>
              <button
                class="btn btn-warning"
                type="submit"
                style={{ marginTop: 60, width: 500 }}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: -30,
              textAlign: "center",
              marginTop: -70,
              paddingBottom: 33,
              color: "white",
            }}
          >
            Already have an account!
            <Link to="login">
              <button class="btn btn-danger">Login</button>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default Sign;
