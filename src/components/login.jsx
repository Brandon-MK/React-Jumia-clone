import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Fire from "./firebase";

class login extends Component {
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
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(<Link to="/" />)
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
            <div style={{ fontSize: 28, marginLeft: 20 }}>Login</div>
          </div>
        </nav>
        <div
          class="container"
          style={{
            marginTop: 70,
            paddingBottom: 30,
          }}
        >
          <div
            class="card border mb-3"
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 400,
              width: 600,
              marginLeft: 250,
            }}
          >
            <div class="input-group " style={{ width: 500, marginTop: 50 }}>
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "grey" }}
                >
                  <FontAwesomeIcon icon="envelope" color="white" />
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
            <div class="input-group " style={{ width: 500, marginTop: 50 }}>
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "grey" }}
                >
                  <FontAwesomeIcon icon="key" color="white" />
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
              class="btn btn-primary"
              type="submit"
              onClick={this.submit}
              style={{ marginTop: 60, width: 500 }}
            >
              Login
            </button>
            <div class="nav-item">
              <a
                class="nav-link active"
                href="#"
                style={{ color: "#4287f5", marginTop: 30 }}
              >
                <Link to={"/Forgot"}>Forgot Password</Link>
              </a>
            </div>
          </div>
          <div
            class="row"
            style={{
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bolder",
              paddingBottom: 58,
            }}
          >
            Don't have an account?
            <div style={{ color: "#4287f5" }}>
              <Link to={"/SignUp"}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
