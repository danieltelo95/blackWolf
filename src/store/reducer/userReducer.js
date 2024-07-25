// src/store/reducers/userReducer.js
const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'CLEAR_USER':
      return null;
    default:
      return state;
  }
};

export default userReducer;
