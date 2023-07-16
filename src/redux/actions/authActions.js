// authActions.js

import {
  signupStart,
  signupSuccess,
  signupFailure,
  loginStart,
  loginSuccess,
  loginFailure,
} from '../reducers/authSlice';

export const signup = (userData) => async (dispatch) => {
  dispatch(signupStart());
  console.log(userData, 'redux');

  try {
    // Perform the signup request to your backend API
    const response = await signup(userData);

    // Dispatch success action with the user data
    dispatch(signupSuccess(response.data.user));
  } catch (error) {
    // Dispatch failure action with the error message
    dispatch(signupFailure(error.message));
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch(loginStart());

  try {
    // Perform the login request to your backend API
    const response = await login(userData);

    // Dispatch success action with the user data
    dispatch(loginSuccess(response.data.user));
  } catch (error) {
    // Dispatch failure action with the error message
    dispatch(loginFailure(error.message));
  }
};
