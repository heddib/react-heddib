import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Main from "./../pages/Main";
import AllQuizzPage from "./../pages/Quizz/index";
import OneQuizzPage from "./../pages/Quizz/quizz";
import Error_404 from "./../pages/Errors/404";

const Routes = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/quizz/:id" component={OneQuizzPage} />
          <Route path="/quizz" component={AllQuizzPage} />
          <Route path="*" component={Error_404} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};
export default Routes;
