import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import userReducers from './reducers/userReducers'

export default configureStore({
  reducer: combineReducers({
    user: userReducers
  }),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
})