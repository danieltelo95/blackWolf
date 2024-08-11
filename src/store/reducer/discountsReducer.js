// src/store/reducers/discountsReducer.js
const initialState = [];

const discountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DISCOUNTS':
      return action.payload;
    default:
      return state;
  }
};

export default discountsReducer;
