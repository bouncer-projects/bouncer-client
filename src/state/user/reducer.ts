import { createReducer } from '@reduxjs/toolkit'
import {
  addSerializedToken
} from './actions'

export interface UserState {
  tokens: {
    github: string
  }
}

export const initialState: UserState = {
  tokens: {
    github: ''
  }
}

export default createReducer(initialState, builder => builder
  .addCase(addSerializedToken, (state, { payload: { serializedToken } }) => {
    console.log('state: ', state)
    console.log('serializedToken: ', serializedToken)
  }))
