import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import FooterBar from './FooterBar';
import ItemListContainer from './ItemListContainer';

const styles = theme => ({});

class App extends Component {
  state = {
    value: 'recents'
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
        <ItemListContainer />
        <FooterBar />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
