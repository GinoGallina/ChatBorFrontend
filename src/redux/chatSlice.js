import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        mensajes: [],
    },
    reducers: {
        agregarMensaje: (state, action) => {
            state.mensajes = [...state.mensajes, action.payload]
        },
    },
})

export const { agregarMensaje } = chatSlice.actions
export const selectMensajes = (state) => state.chat.mensajes

export default chatSlice.reducer
