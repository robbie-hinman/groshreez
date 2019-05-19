import * as actionTypes from '../actions/actionTypes';
const initialState = {
  addGroceriesModalOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ADD_MODAL:
      return { ...state, addGroceriesModalOpen: !state.addGroceriesModalOpen };
    default:
      return state;
  }
};
