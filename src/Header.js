import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import AddBoxIcon from '@material-ui/icons/AddBoxOutlined';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  otherToolbarButton: {
    marginLeft: 20,
    marginRight: 20
  }
});

class Header extends Component {
  state = {
    value: 'recents'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='absolute' color='default' className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              color='inherit'
              noWrap
              className={classes.grow}
            >
              Groshreez
            </Typography>
            <IconButton
              className={classes.otherToolbarButton}
              color='inherit'
              aria-label='My Lists'
            >
              <ViewModuleIcon />
            </IconButton>
            <IconButton
              className={classes.otherToolbarButton}
              color='inherit'
              aria-label='Sort By'
            >
              <SortByAlphaIcon />
            </IconButton>
            <IconButton
              className={classes.otherToolbarButton}
              color='inherit'
              aria-label='Sort By'
            >
              <AddBoxIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
