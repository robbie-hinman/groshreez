import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ItemList from './ItemList';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 80
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function ItemListContainer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <ItemList />
        </Grid>
      </Grid>
    </div>
  );
}

ItemListContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemListContainer);
