import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FooterBar from "../FooterBar";
import ItemListContainer from "../ItemListContainer";
import AddDialog from "../AddDialog";
import { toggleAddModal as toggleAddAction } from "../../actions/groceryList";

const ShoppingView = (props) => (
  <>
    <ItemListContainer />
    <FooterBar />
    <AddDialog
      isOpen={props.addModalIsOpen}
      toggleModal={props.toggleAddModal}
    />
    )
  </>
);

const mapStateToProps = (state) => ({
  addModalIsOpen: state.addGroceriesModalOpen
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddModal: () => dispatch(toggleAddAction())
  };
};

ShoppingView.propTypes = {
  addModalIsOpen: PropTypes.bool.isRequired,
  toggleAddModal: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingView);
