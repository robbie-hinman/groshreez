import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  groceryItem: {}
});

const UnstyledGroceryItem = props => {
  const { classes } = props;
  return (
    <ListItem key={props.value} button className={classes.groceryItem}>
      <ListItemAvatar>
        <Avatar alt={`Avatar n°${props.value + 1}`} />
      </ListItemAvatar>
      <ListItemText primary={`Line item ${props.value + 1}`} />
      <ListItemSecondaryAction>
        <Checkbox
          onChange={props.handleToggle(props.value)}
          checked={props.checked}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

UnstyledGroceryItem.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(UnstyledGroceryItem);
