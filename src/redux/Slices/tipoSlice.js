//import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const api = 'http://localhost:3000/tipos/all'

export const fetchTipos = createAsyncThunk('tipos/fetchTipos', async () => {
    //const response = await axios.get(api)
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)
    return data.data
})

const tipoSlice = createSlice({
    name: 'tipo',
    initialState: {
        tipos: [],
        loading: true,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTipos.pending, (state) => {
                // Manejar el inicio de la solicitud
                state.loading = true
                state.error = null
            })
            .addCase(fetchTipos.fulfilled, (state, action) => {
                // Manejar el éxito de la solicitud
                state.loading = false
                state.tipos = action.payload
            })
            .addCase(fetchTipos.rejected, (state, action) => {
                // Manejar el error de la solicitud
                state.loading = false
                state.error = action.error.message
            })
    },
})

export const { fetchTiposStart, fetchTiposSuccess, fetchTiposFailure } =
    tipoSlice.actions

export default tipoSlice.reducer
