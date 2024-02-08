//import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const FETCH_TIPO = 'tipos/fetchTipos'
const CREATE_TIPO = 'tipos/createTipo'
const DELETE_TIPO = 'tipos/deleteTipo'

const api = 'http://localhost:3000/tipos'

// Función para manejar las respuestas JSON de las solicitudes
const handleResponse = async (response) => {
    const data = await response.json()
    console.log(data)
    const mensajeAMostrar = data.mensaje.join('<br>')
    if (!response.ok) {
        throw new Error(mensajeAMostrar || 'Error de servidor')
    }
    return data
}

export const fetchTipos = createAsyncThunk(FETCH_TIPO, async () => {
    //const response = await axios.get(api)
    const response = await fetch(`${api}/all`)
    return handleResponse(response)
})

export const createTipo = createAsyncThunk(CREATE_TIPO, async (data) => {
    const response = await fetch(`${api}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const responseData = await response.json()
    return responseData
})

export const deleteTipo = createAsyncThunk(DELETE_TIPO, async (id) => {
    const response = await fetch(`${api}/delete/${id}`, {
        method: 'DELETE',
    })
    const data = await response.json()
    return data
})

const tipoSlice = createSlice({
    name: 'tipo',
    initialState: {
        tipos: [],
        loading: true,
        error: null,
        mensaje: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTipos.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
                state.mensaje = null
            })
            .addCase(fetchTipos.fulfilled, (state, action) => {
                // Manejar el éxito de la solicitud
                state.loading = false
                state.tipos = action.payload.data
            })
            .addCase(fetchTipos.rejected, (state, action) => {
                // Manejar el error de la solicitud
                state.loading = false
                state.mensaje = null
                state.error = action.error.message
            })
            .addCase(createTipo.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
            })
            .addCase(createTipo.fulfilled, (state, action) => {
                // Manejar el éxito de la solicitud
                state.loading = false
                state.tipos.push(action.payload)
            })
            .addCase(createTipo.rejected, (state, action) => {
                // Manejar el error de la solicitud
                state.loading = false
                state.error = action.error.message
            })
            .addCase(deleteTipo.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
                state.mensaje = null
            })
            .addCase(deleteTipo.fulfilled, (state, action) => {
                // Manejar el éxito de la solicitud
                state.loading = false
                state.mensaje = action.payload.mensaje
                state.error = null
                state.tipos = state.tipos.filter((tipo) => {
                    return tipo.id != action.payload.data
                })
            })
            .addCase(deleteTipo.rejected, (state, action) => {
                // Manejar el error de la solicitud
                state.loading = false
                state.error = action.error.message
                state.mensaje = null
            })
    },
})

export const { fetchTiposStart, fetchTiposSuccess, fetchTiposFailure } =
    tipoSlice.actions

export default tipoSlice.reducer
