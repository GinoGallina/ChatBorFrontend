import { configureStore } from '@reduxjs/toolkit'
import chatSlice from '../Slices/chatSlice.js'
import testSlice from '../testSlice.js'
import tipoSlice from '../Slices/tipoSlice.js'
import userSlice from '../Slices/userSlice.js'

export const store = configureStore({
    reducer: {
        chat: chatSlice,
        test: testSlice,
        tipo: tipoSlice,
        user: userSlice,
    },
})
