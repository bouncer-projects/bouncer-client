import { createAction } from '@reduxjs/toolkit'

export interface SerializedToken {
  tokens: {
    github: string
  }
}

export const addSerializedToken = createAction<{ serializedToken: SerializedToken }>('user/addSerializedToken')
