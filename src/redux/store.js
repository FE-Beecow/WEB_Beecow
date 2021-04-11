import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import userReducers from './reducers/userReducers'
import alertReducer from './reducers/alertReducers'

export default configureStore({
  reducer: combineReducers({
    user: userReducers,
    alert: alertReducer
  }),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
})