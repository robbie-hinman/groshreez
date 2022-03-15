import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import ShoppingView from "./views/ShoppingView";
import BulkAddView from "./views/BulkAddView";
import ListsView from "./views/ListsView";

const styles = (theme) => ({});

class App extends Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // const { classes } = this.props;
    // const { value } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />

        <Switch>
          <Route path="/shop">
            <ShoppingView />
          </Route>
          <Route path="/lists">
            <ListsView />
          </Route>
          <Route path="/">
            <BulkAddView />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
