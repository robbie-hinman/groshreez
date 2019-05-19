import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import FooterBar from './FooterBar';
import ItemListContainer from './ItemListContainer';
import AddDialog from './AddDialog';
import { toggleAddModal as toggleAddAction } from '../actions/groceryList';

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
        <AddDialog
          isOpen={this.props.addModalIsOpen}
          toggleModal={this.props.toggleAddModal}
        />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  addModalIsOpen: PropTypes.bool.isRequired,
  toggleAddModal: PropTypes.func.isRequired
};

const StyledApp = withStyles(styles)(App);

const mapStateToProps = state => ({
  addModalIsOpen: state.addGroceriesModalOpen
});

const mapDispatchToProps = dispatch => {
  return {
    toggleAddModal: () => dispatch(toggleAddAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledApp);
