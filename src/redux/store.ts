import { configureStore } from "@reduxjs/toolkit"
import {combineReducers} from 'redux'
import rootReducer from "./rootReducer"
import {rootSaga} from './productSaga'
import createSagaMiddleware from 'redux-saga'
// const store = createStore(()=>{
//     return 100
// })

// const dummyReducer =()=>{
//     return 100
// }
// const store = createStore(dummyReducer)
const sagaMiddleware = createSagaMiddleware()
export type RootState = ReturnType<typeof combineReducers>
const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)
export default store