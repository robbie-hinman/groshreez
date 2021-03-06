import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { toggleAddModal } from '../actions/groceryList';

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
});

class Footer extends Component {
  state = {
    value: 'recents'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position='fixed' color='primary' className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div>
              <Button color='inherit'>All</Button>
              <Button color='inherit'>In Cart</Button>
              <Button color='inherit'>To Get</Button>
            </div>
            <Fab
              color='secondary'
              aria-label='Add'
              className={classes.fabButton}
              onClick={this.props.toggleAddModal}
            >
              <AddIcon />
            </Fab>
            <Button color='inherit'>Checkout</Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleAddModal: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => {
  return {
    toggleAddModal: () => dispatch(toggleAddModal())
  };
};

const StyledFooter = withStyles(styles)(Footer);
export default connect(
  null,
  mapDispatchToProps
)(StyledFooter);
