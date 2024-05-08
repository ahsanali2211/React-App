// productReducer.js

import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from './constant';

// Initial state for the product
const initialState = {
  users: null,
  error: null,
};

// Product reducer function
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        error: null,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        Users: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default usersReducer;
