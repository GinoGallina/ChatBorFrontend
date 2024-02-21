//import axios from 'axios'
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.withCredentials = true

const FETCH_TIPO = 'tipos/fetchTipos'
const GET_ONE_TIPO = 'tipos/getOne'
const CREATE_TIPO = 'tipos/createTipo'
const DELETE_TIPO = 'tipos/deleteTipo'
const RESET_MESSAGE_AND_ERROR = 'tipos/resetMessageAndError'

const api = 'http://localhost:3000/tipos'

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

// export const fetchTipos = createAsyncThunk(FETCH_TIPO, async () => {
//     //const response = await axios.get(api)
//     const response = await axios.get(`${api}/all`)
//     return response.data
//     //return handleResponse(response)
// })

export const fetchTipos = createAsyncThunk(FETCH_TIPO, async () => {
    const response = await fetch(`${api}/all`, {
        method: 'GET',
        credentials: 'include', //Incluir cookies en la solicitud
    })
    return handleResponse(response)
})

export const getOneTipoSlice = createAsyncThunk(GET_ONE_TIPO, async (id) => {
    //const response = await axios.get(api)
    const response = await fetch(`${api}/${id}`)
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
    return handleResponse(response)
})

export const deleteTipo = createAsyncThunk(DELETE_TIPO, async (id) => {
    const response = await fetch(`${api}/delete/${id}`, {
        method: 'DELETE',
    })
    return handleResponse(response)
})

export const resetMensajeyError = createAction(RESET_MESSAGE_AND_ERROR)

const tipoSlice = createSlice({
    name: 'tipo',
    initialState: {
        tipos: [],
        loading: true,
        error: null,
        mensaje: null,
        tipoSeleccionado: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTipos.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
                state.mensaje = null
                state.tipoSeleccionado = null
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
            .addCase(getOneTipoSlice.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
                state.mensaje = null
            })
            .addCase(getOneTipoSlice.fulfilled, (state, action) => {
                // Manejar el éxito de la solicitud
                state.loading = false
                state.error = null
                state.tipoSeleccionado = action.payload.data
            })
            .addCase(getOneTipoSlice.rejected, (state, action) => {
                // Manejar el error de la solicitud
                state.loading = false
                state.mensaje = null
                state.error = action.error.message
            })
            .addCase(createTipo.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
                state.mensaje = null
                state.tipoSeleccionado = null
            })
            .addCase(createTipo.fulfilled, (state, action) => {
                // Manejar el éxito de la solicitud
                state.loading = false
                state.error = null
                state.mensaje = action.payload.mensaje
                state.tipos = [...state.tipos, action.payload.data]
            })
            .addCase(createTipo.rejected, (state, action) => {
                // Manejar el error de la solicitud
                state.loading = false
                state.mensaje = null
                state.error = action.error.message
            })
            .addCase(deleteTipo.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
                state.mensaje = null
                state.tipoSeleccionado = null
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
            .addCase(resetMensajeyError, (state) => {
                state.error = null
                state.mensaje = null
            })
    },
})

// export const { fetchTiposStart, fetchTiposSuccess, fetchTiposFailure } =
//     tipoSlice.actions

export default tipoSlice.reducer
