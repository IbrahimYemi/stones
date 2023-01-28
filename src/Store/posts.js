import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
}

export const postsPostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPosts } = postsPostsSlice.actions

export default postsPostsSlice.reducer