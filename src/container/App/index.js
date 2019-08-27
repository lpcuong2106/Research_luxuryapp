import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "../../components/Menu/";
import Footer from "../../components/Footer/";
import routes from "../../routes";

class App extends Component {
  showContent = routes => {
    if (routes.length < 0) {
      return false;
    }
    return (
      <Switch>
        {routes.map((value, key) => {
          return (
            <Route
              key={key}
              path={value.path}
              exact={value.exact}
              component={value.component}
            />
          );
        })}
      </Switch>
    );
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Menu />
          {this.showContent(routes)}
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
