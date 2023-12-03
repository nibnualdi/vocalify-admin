import { configureStore } from '@reduxjs/toolkit'
import { songsApi } from './services/song'

export const store = configureStore({
  reducer: {
    [songsApi.reducerPath]: songsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(songsApi.middleware),
})