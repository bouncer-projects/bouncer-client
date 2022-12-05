import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

import user from './user/reducer'

export const store = configureStore({
  reducer: {
    user
  },
})
