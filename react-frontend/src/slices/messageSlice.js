import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    value: []
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    allMessages(state, action) {
      state.value = action.payload
    },
  },
})

export const { allMessages } = messageSlice.actions
export default messageSlice.reducer