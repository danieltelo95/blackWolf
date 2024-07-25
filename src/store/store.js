import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './reducer/userReducer';
import coursesReducer from './reducer/coursesReducer';
import discountsReducer from './reducer/discountsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  discounts: discountsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
