import { createSlice } from '@reduxjs/toolkit'

const mensajesLocalSotarge =
    localStorage.getItem('mensajes') == null
        ? []
        : JSON.parse(localStorage.getItem('mensajes'))

const MENSAJE_INICIO = 'Hola, ¡bienvenido al chat de ...!'

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        mensajes: mensajesLocalSotarge,
    },
    reducers: {
        agregarMensaje: (state, action) => {
            if (
                !(
                    action.payload.texto == MENSAJE_INICIO &&
                    JSON.parse(localStorage.getItem('mensajes')) != null
                )
            ) {
                state.mensajes = [...state.mensajes, action.payload]
                localStorage.setItem('mensajes', JSON.stringify(state.mensajes))
            }
        },
        reinciarMensajes: (state) => {
            state.mensajes.filter((mensaje, index) => index != 0)
        },
    },
})

export const { agregarMensaje, reinciarMensajes } = chatSlice.actions
export const selectMensajes = (state) => state.chat.mensajes

export default chatSlice.reducer
