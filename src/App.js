import React, { useState, Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home";
import BasicExample from "./components/route";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Fire from "./components/firebase";
import {
  faMobile,
  faGlobe,
  faCoffee,
  faBuilding,
  faMoneyBillWave,
  faSearch,
  faShoppingCart,
  faRobot,
  faShoePrints,
  faStopwatch,
  faTshirt,
  faChair,
  faCar,
  faPlay,
  faPrescriptionBottle,
  faEnvelope,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faUser,
  faEnvelope,
  faKey,
  faPrescriptionBottle,
  faCar,
  faPlay,
  faChair,
  faShoePrints,
  faTshirt,
  faStopwatch,
  faMobile,
  faRobot,
  faGlobe,
  faCoffee,
  faBuilding,
  faMoneyBillWave,
  faSearch,
  faShoppingCart
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    this.authListner();
  }

  authListner = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: true });
      } else {
        this.setState({ user: true });
      }
    });
  };
  render() {
    return (
      <div>
        <BasicExample />
      </div>
    );
  }
}

export default App;
