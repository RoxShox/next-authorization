import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../pages/axios'

export const fetchAuth = createAsyncThunk('auth/fetchUserLog', async params => {
	const { data } = await axios.post('/auth/login', params)

	return data
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async params => {
	const { data } = await axios.post('/auth/register', params)

	return data
})

const initialState = {
	data: null,
	status: 'loading',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAuth.pending]: state => {
			state.status = 'loading'
			state.data = null
		},
		[fetchAuth.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.data = action.payload
		},
		[fetchAuth.rejected]: state => {
			state.status = 'error'
			state.data = null
		},
		[fetchRegister.pending]: state => {
			state.status = 'loading'
			state.data = null
		},
		[fetchRegister.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.data = action.payload
		},
		[fetchRegister.rejected]: state => {
			state.status = 'error'
			state.data = null
		},
	},
})

export const selectIsAuth = state => Boolean(state.auth.data)

export const authReducer = authSlice.reducer
