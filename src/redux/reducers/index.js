// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducers from '../reducers/authSlice';
// Import other reducers as needed

const rootReducer = combineReducers({
  auth: authReducers,
  // Add other reducers here
});

export default rootReducer;
