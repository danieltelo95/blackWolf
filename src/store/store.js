// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from '../store/reducer/userReducer';
import coursesReducer from '../store/reducer/coursesReducer';
import discountsReducer from '../store/reducer/discountsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  discounts: discountsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
