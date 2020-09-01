import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import Counters from "./counters";
import Sign from "./sign";
import login from "./login";
import Forgot from "./forget";

const BasicExample = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Counters} />
        <Route path="/sign" component={Sign} />
        <Route path="/login" component={login} />
        <Route path="/Forgot" component={Forgot} />
        <Route path="/SignUp" component={Sign} />
      </Switch>
    </div>
  );
};

export default BasicExample;
