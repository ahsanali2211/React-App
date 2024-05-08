// sagas.js

import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProductSuccess, fetchProductFailure,fetchUserSuccess,fetchUserFailure } from './productAction';
import {FETCH_PRODUCT_REQUESTED,FETCH_USERS_REQUESTED} from './constant'
import { api } from './Api';

// Worker Saga: Fetch product data from the API
function* fetchProduct(): Generator<unknown, void, unknown>  {
  try {
    const products = yield call(api.fetchData); // Using api.fetchData from api.js

    // Dispatch a success action with the retrieved product
    yield put(fetchProductSuccess(products));
  } catch (error) {
    // Dispatch a failure action with the error message
    yield put(fetchProductFailure(error.message));
  }
}
function* fetchUsers(): Generator<unknown, void, unknown>  {
  try {
    const users = yield call(api.fetchUser); // Using api.fetchData from api.js

    // Dispatch a success action with the retrieved product
    yield put(fetchUserSuccess(users));
  } catch (error) {
    // Dispatch a failure action with the error message
    yield put(fetchUserFailure(error.message));
  }
}

// Watcher Saga: Watch for FETCH_PRODUCT_REQUESTED actions
function* watchFetchProduct() {
  yield takeEvery(FETCH_PRODUCT_REQUESTED, fetchProduct);
  yield takeEvery(FETCH_USERS_REQUESTED, fetchUsers);
}

// Root Saga: Combine all sagas into a root saga
export function* rootSaga() {
  yield watchFetchProduct();
  // Add more watchers here for other sagas
}
