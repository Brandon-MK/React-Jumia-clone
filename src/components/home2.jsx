import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "./DE HUNCHOS.PNG";
import four from "./four.png";
import three from "./three.png";
import two from "./two.png";
import five from "./five.png";
import six from "./six.png";
import fendi from "./c2.png";
import sweat from "./Capture1.png";
import Cards from "./card";
import Fire from "./firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      cart: "zero",
      qut: 2,
      user: false,
      counters: [
        {
          main: "New Dance group",
          money: "$200",
          image: image,
          number: 0,
          height: 90,
          width: 90,
        },
        {
          main: "Fendi Girl shirt",
          money: "$800",
          image: fendi,
          number: 0,
          height: 90,
          width: 90,
        },
        {
          main: "Versace sweat pants",
          money: "$900",
          image: sweat,
          number: 0,
          height: 140,
          width: 90,
        },
        {
          main: "Men Shoes",
          money: "$600",
          image: two,
          number: 0,
          height: 90,
          width: 130,
        },
        {
          main: "Nike shoes Women",
          money: "$570",
          image: five,
          number: 0,
          height: 90,
          width: 150,
        },
        {
          main: "Hip Hop chain",
          money: "$570",
          image: four,
          number: 0,
          height: 90,
          width: 90,
        },
        {
          main: "Zara classic",
          money: "$570",
          image: three,
          number: 0,
          height: 90,
          width: 90,
        },
        {
          main: "Golden Verscae Watch",
          money: "$840",
          image: six,
          number: 0,
          height: 90,
          width: 90,
        },
      ],
    };

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

  handleCart() {
    if (this.state.counters.filter((c) => c.value > 0).length === 0) {
      return "badge badge-pill badge-secondary";
    } else {
      return "badge badge-pill badge-warning";
    }
  }

  nav() {
    if (this.state.user === true) {
      return (
        <Link to={"/login"}>
          <a class="dropdown-item">
            <div class="btn btn-warning">Login</div>
          </a>
        </Link>
      );
    } else {
      return <div>Logg</div>;
    }
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].number++;
    this.setState({ counters });
    localStorage.setItem("my", JSON.stringify(counter));
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].number--;
    this.setState({ counters });
  };

  render() {
    return (
      <div style={{ backgroundColor: "orange" }}>
        <nav className="navbar sticky-top navbar-light bg-light col fixed">
          <div class="row" sty>
            <div class="col-*-*">
              <a
                className="navbar-brand"
                href="#"
                style={{
                  color: "orange",
                  marginLeft: 20,
                  fontWeight: "bold",
                }} //Jumia logo
              >
                JUMIA ONLINE SHOP
              </a>
            </div>
            <div //The Navigation bar
              class="col-*-*"
              style={{
                marginLeft: 50,
                width: 700,
                top: 5,
              }}
            >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon="search" />
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for product"
                  aria-label="Username"
                  value={this.state.text}
                  onChange={this.handleChange}
                  aria-describedby="basic-addon1"
                />
                <div class="input-group-append">
                  <button class="btn btn-warning" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div class="dropdown show" style={{ marginLeft: 50 }}>
              <a
                class="btn btn-info dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Users
              </a>

              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <div style={{ left: 50 }}>{this.props.login}</div>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>

          <button class="btn btn-info ">
            Help?
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
              <FontAwesomeIcon icon="shopping-cart" />
              <span className="badge badge-secondary">
                {this.state.counters.filter((c) => c.number > 0).length}
              </span>
              {/*The counter for items picked*/}
            </button>
          </Link>
        </nav>
        <div style={{ backgroundColor: "orange" }}>
          <div
            class="card"
            style={{
              width: 150,
              top: 50,
              marginLeft: 30,
            }}
          >
            <ul class="nav flex-column ">
              <li class="nav-item">
                {/*The floating card on the left*/}
                <a class="nav-link active" href="#" style={{ color: "grey" }}>
                  <FontAwesomeIcon icon="robot" />
                  Technology
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" style={{ color: "grey" }}>
                  <FontAwesomeIcon icon="shoe-prints" />
                  Shoes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#" style={{ color: "grey" }}>
                  <FontAwesomeIcon icon="prescription-bottle" />
                  Cosemetics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" style={{ color: "grey" }}>
                  <FontAwesomeIcon icon="stopwatch" />
                  Watches
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "grey" }}>
                  <FontAwesomeIcon icon="tshirt" />
                  Clothes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "grey" }}>
                  <FontAwesomeIcon icon="chair" />
                  Funiture
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "grey" }}>
                  <FontAwesomeIcon icon="car" />
                  Automobiles
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "grey" }}>
                  <FontAwesomeIcon icon="play" />
                  Toys
                </a>
              </li>
            </ul>
          </div>
          <h1
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 70,
            }}
          >
            Welcome to Jumia{/*The welcome banner*/}
          </h1>
          <span
            class="card"
            style={{
              width: 180,
              top: -350,
              marginLeft: 1100,
            }}
          >
            {/*The floating card on the right*/}
            <ul class="nav flex-column ">
              <li class="nav-item">
                <a class="nav-link active" href="#" style={{ color: "grey" }}>
                  <div>
                    <h6 style={{ color: "teal" }}>QULITY</h6>You Can Trust
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "grey" }}>
                  <div>
                    <h6 style={{ color: "teal" }}>EASY RETURN</h6>Quick
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "grey" }}>
                  <div>
                    <h6 style={{ color: "teal" }}>SELL ON JUMIA</h6>Millions of
                    visitors
                  </div>
                </a>
              </li>
            </ul>
          </span>
        </div>
        {/*The group buttons*/}
        <div
          class="btn-group btn-group-lg"
          style={{ marginLeft: 390, marginTop: -300 }}
        >
          <button type="button" class="btn btn-primary">
            Jumia Mall
          </button>
          <button type="button" class="btn btn-success">
            Jumia Global
          </button>
          <button type="button" class="btn btn-info">
            Airtime & Bills
          </button>
          <button type="button" class="btn btn-danger">
            Top Deals
          </button>
        </div>
        {/*The list of items on sell*/}
        <div class="container row" style={{ marginLeft: 100 }}>
          {this.state.counters.map((counter) => (
            <Cards
              key={counter.main}
              counter={counter}
              main={counter.main}
              height={counter.height}
              width={counter.width}
              money={counter.money}
              image={counter.image}
              numbers={counter.number}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
