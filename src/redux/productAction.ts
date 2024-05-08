import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUESTED, FETCH_PRODUCT_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUESTED, FETCH_USERS_SUCCESS } from "./constant";

export const fetchProductRequested = () => ({
    type: FETCH_PRODUCT_REQUESTED
  });
  
  export const fetchProductSuccess = (products) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: { products },
  });
  
  export const fetchProductFailure = (error:string) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: { error },
  });
export const fetchuUserRequested = () => ({
    type: FETCH_USERS_REQUESTED
  });
  
  export const fetchUserSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users },
  });
  
  export const fetchUserFailure = (error:string) => ({
    type: FETCH_USERS_FAILURE,
    payload: { error },
  });