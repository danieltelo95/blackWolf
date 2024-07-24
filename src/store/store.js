import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const initialState = {
    user: null,
    courses: [],
    discounts: [],
};

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        case 'CLEAR_USER':
            return null;
        default:
            return state;
    }
};

const coursesReducer = (state = initialState.courses, action) => {
    switch (action.type) {
        case 'SET_COURSES':
            return action.payload;
        default:
            return state;
    }
};

const discountsReducer = (state= initialState.discounts, action) => {
    switch (action.type){
        case 'SET_DISCOUNTS':
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    discounts: discountsReducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;