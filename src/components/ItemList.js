import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import GroceryItem from './GroceryItem';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }
  state = {
    checked: [1]
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes } = this.props;
    const numbersArray = [...Array(50).keys()];

    return (
      <List className={classes.root}>
        {numbersArray.map(value => (
          <GroceryItem
            key={value}
            value={value}
            handleToggle={this.handleToggle}
            checked={this.state.checked.indexOf(value) !== -1}
          />
        ))}
      </List>
    );
  }
}

ItemList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemList);
