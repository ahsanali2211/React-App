// productReducer.js

import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from './constant';

// Initial state for the product
const initialState = {
  products: null,
  error: null,
};

// Product reducer function
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        error: null,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        products: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default productReducer;
