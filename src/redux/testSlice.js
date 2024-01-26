import { createSlice } from '@reduxjs/toolkit'

const testSlice = createSlice({
    name: 'test',
    initialState: [],
    reducers: {
        addTest: (state, action) => {
            state.push(...[state], action.payload)
        },
        removeTest: (state, action) => {
            state.filter((item) => item.id === action.payload)
        },
    },
})

export const { addTest, removeTest } = testSlice.actions
export default testSlice
