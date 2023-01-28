import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  latest: [],
}

export const latestPostsSlice = createSlice({
  name: 'latest',
  initialState,
  reducers: {
    setLatestPosts: (state, action) => {
      state.latest = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLatestPosts } = latestPostsSlice.actions

export default latestPostsSlice.reducer