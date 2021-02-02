import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./../pages/Main";
import Error_404 from "./../pages/Errors/404";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="*" component={Error_404} />:
      </Switch>
    </Router>
  );
};
export default Routes;
