import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: {},
}

export const showPostsSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setShowPosts: (state, action) => {
      state.show = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShowPosts } = showPostsSlice.actions

export default showPostsSlice.reducer