import { configureStore } from '@reduxjs/toolkit'
import chatSlice from './chatSlice.js'
import testSlice from './testSlice.js'

export const store = configureStore({
    reducer: {
        chat: chatSlice,
        test: testSlice,
    },
})
