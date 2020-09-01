import React, { Component } from "react";
import Home from "./home2";
import Fire from "./firebase";
import { Link } from "react-router-dom";

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
    this.authListner = this.authListner.bind(this);
  }

  authListner = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user === true) {
        this.setState({ user: true });
      } else {
        this.setState({ user: false });
      }
    });
  };

  componentDidMount() {
    this.authListner();
  }

  render() {
    if (this.state.user === true) {
      return (
        <div>
          <Home
            login={
              <div class="btn btn-success" style={{ marginLeft: 60 }}>
                Profile
              </div>
            }
          />
        </div>
      );
    } else {
      return (
        <div>
          <Home
            login={
              <Link to="/login">
                <div class="btn btn-primary" style={{ marginLeft: 60 }}>
                  Login
                </div>
              </Link>
            }
          />
        </div>
      );
    }
  }
}

export default First;
