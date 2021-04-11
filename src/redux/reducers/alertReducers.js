import { createSlice } from '@reduxjs/toolkit'

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    open: false,
    messageType: null,
    message: ''
  },
  reducers: {
    open: (state, action) => {
      state.open = true
      state.messageType = action.payload.messageType
      state.message = action.payload.message
    },
    close: (state, action) => {
      state.open = false
      state.messageType = ''
      state.message = ''
    }
  },
})

export const { actions, reducer } = alertSlice

export default reducer
