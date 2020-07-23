import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import Counters from "./counters";

const BasicExample = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Counters} />
      </Switch>
    </div>
  );
};

export default BasicExample;
