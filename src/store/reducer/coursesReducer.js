// src/store/reducers/coursesReducer.js

const initialState = [];

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COURSES':
      return action.payload;
    default:
      return state;
  }
};

export default coursesReducer;
