import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ItemList from './ItemList';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 9,
    marginBottom: theme.spacing.unit * 9,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function ItemListContainer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <ItemList />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ItemListContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemListContainer);
