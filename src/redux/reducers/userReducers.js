import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import { setCurrentUser } from '../../utils/storage'
import { getAllBusiness, login, register } from '../actions/user'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    business: null,
    currentBusinessId: null
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload
    },
    setBusiness: (state, action) => {
      state.currentBusinessId = action.payload
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      //state.currentUserLoading = LOADING_STATE.LOADING
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data
      setCurrentUser(false, action.payload.data)
    },
    [login.rejected]: (state, action) => {
    },
    [getAllBusiness.fulfilled]: (state, action) => {
      state.business = action.payload.data
    },
    [register.fulfilled]: (state, action) => {
      state.fullName = action?.payload?.data?.fullName
    }
  }
})

export const { actions, reducer } = userSlice

export default reducer
