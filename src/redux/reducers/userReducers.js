import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import { setToken } from '../../utils/storage'
import { getAllBusiness, login } from '../actions/user'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    bussiness: null
  },
  reducers: {
    setBussiness: (state, action) => {
      state.bussiness = action.payload
    },
    login: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      //state.currentUserLoading = LOADING_STATE.LOADING
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data
      setToken(false, action.payload.data)
    },
    [login.rejected]: (state, action) => {

    },
    [getAllBusiness.fulfilled]: (state, action) => {
      state.business = action.payload.data
    }
  }
})

export const { actions, reducer } = userSlice

export default reducer
