import { configureStore } from '@reduxjs/toolkit'
import latestReducer from './latest';
import postsReducer from './posts';
import showReducer from './show'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    latest: latestReducer,
    show: showReducer
  },
})