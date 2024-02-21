//import axios from 'axios'
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'

const LOGIN = 'users/login'
const LOGOUT = 'users/logout'
const RESET_MESSAGE_AND_ERROR = 'users/resetMessageAndError'

const api = 'http://localhost:3000/users'

// Función para manejar las respuestas JSON de las solicitudes
const handleResponse = async (response) => {
    const data = await response.json()
    console.log(data)
    const mensajeAMostrar = Array.isArray(data.mensaje)
        ? data.mensaje.join('<br>')
        : data.mensaje
    if (!response.ok) {
        throw new Error(mensajeAMostrar || 'Error de servidor')
    }
    return data
}

export const login = createAsyncThunk(LOGIN, async (data) => {
    const response = await fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
    })
    return handleResponse(response)
})
export const logout = createAsyncThunk(LOGOUT, async (data) => {
    const response = await fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return handleResponse(response)
})

export const resetMensajeyError = createAction(RESET_MESSAGE_AND_ERROR)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
        mensaje: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
                state.mensaje = null
            })
            .addCase(login.fulfilled, (state, action) => {
                // Manejar el éxito de la solicitud
                state.loading = false
                state.error = null
                state.mensaje = action.payload.mensaje
                state.user = action.payload.data
            })
            .addCase(login.rejected, (state, action) => {
                // Manejar el error de la solicitud
                state.loading = false
                state.mensaje = null
                state.error = action.error.message
            })
            .addCase(logout.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
                state.mensaje = null
            })
            .addCase(logout.fulfilled, (state, action) => {
                // Manejar el éxito de la solicitud
                state.loading = false
                state.error = null
                state.mensaje = action.payload.mensaje
                state.user = null
            })
            .addCase(logout.rejected, (state, action) => {
                // Manejar el error de la solicitud
                state.loading = false
                state.mensaje = null
                state.error = action.error.message
            })
            .addCase(resetMensajeyError, (state) => {
                state.error = null
                state.mensaje = null
            })
    },
})

export default userSlice.reducer
